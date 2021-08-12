const Discord = require('discord.js') ;
require('dotenv').config() ;
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

console.log('Bot is online!') ;

client.login(process.env.DISCORD_TOKEN) ;