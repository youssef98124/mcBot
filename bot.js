const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDU4MzkzMzMzNzU3MTE2NDM3.DgnBlA.hC6W7MpM47sv89nqtfsS3y48Is4);
