import { Channel, Client, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv';
import { getActiveProposals } from './utils/queries';
import storage from 'node-persist';
import { CHAINS } from './config';
import { checkBalances, checkIbcClients, checkProposals } from './tasks';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
export let govChannel: Channel;
export let errChannel: Channel;
client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN).then(()=>init());

const init = async () => {
  if (!process.env.GOV_CHANNEL_ID) throw 'Please set GOV_CHANNEL_ID env value.';
  if (!process.env.ERR_CHANNEL_ID) throw 'Please set ERR_CHANNEL_ID env value.';

    //initialize persistent storage
    await storage.init( /* options ... */ );

    const govChannelRes = await client.channels.fetch(process.env.GOV_CHANNEL_ID);
    if (!govChannelRes) throw 'Unable to find channel with ID GOV_CHANNEL_ID. Is the bot in the server?';
    govChannel = govChannelRes;

    const errChannelRes = await client.channels.fetch(process.env.ERR_CHANNEL_ID);
    if (!errChannelRes) throw 'Unable to find channel with ID ERR_CHANNEL_ID. Is the bot in the server?';
    errChannel = errChannelRes;

    intervalFunction();
    setInterval(intervalFunction, 600_000); //every 10 min
    setInterval(twoHourIntervalFunction, 60 * 60 * 2 * 1_000); //every 2 hours
}

const intervalFunction = async () => {
  for (const chain of CHAINS){
      await checkProposals(chain).catch(e=>console.error(e));
      await checkIbcClients(chain).catch(e=>console.error(e));
      console.log('\n')
  }
  console.log('All checks completed.')
}

const twoHourIntervalFunction = async () => {
  for (const chain of CHAINS){
      await checkBalances(chain).catch(e=>console.error(e));
  }
  console.log('Balance checks completed.')
}