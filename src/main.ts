import { Channel, Client, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv';
import { getProposals } from './utils/queries';
import storage from 'node-persist';
import { CHAINS } from './config';
import { checkProposals } from './tasks';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
export let channel: Channel; // = client.channels.cache.get(process.env.CHANNEL_ID);

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
    //initialize persistent storage
    if (!process.env.CHANNEL_ID) throw 'Please set CHANNEL_ID env value.';

    await storage.init( /* options ... */ );
    const channelRes = await client.channels.fetch(process.env.CHANNEL_ID);
    if (!channelRes) throw 'Unable to find channel with ID CHANNEL_ID. Is the bot in the server?';
    channel = channelRes;
    for (const chain of CHAINS){
        await checkProposals(chain).catch(e=>console.error(e));
    }
}