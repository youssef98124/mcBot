const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDU5MDc4MTA2MTQ2MTQ0Mjg2.Dgw9Ug.frb6LeJzbydZ1JTvOZG3wfu9pTM');
