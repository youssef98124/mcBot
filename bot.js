const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log('---------------');
  console.log('By ༺Ŕą3đ:crown:ᎡᎶᎷ༻ Enjoy')
  console.log('---------------')
});


client.on('message', message => {
    if (message.content.startsWith("رابط")) { 
      message.author.send("https://discord.gg/FVUudm5");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "رابط") {
      message.channel.send("https://discord.gg/FVUudm5");
            } else if (message.content == "رابط") {
            message.channel.send("https://discord.gg/FVUudm5");
            }
        })

     }
  });

client.on('message', message => {
    if (message.content.startsWith("سلام عليكم")) { 
      message.author.send("https://discord.gg/FVUudm5");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "سلام عليكم") {
           message.channel.send("https://discord.gg/FVUudm5");
            }
        })

     }
  });


   client.on('message', message => {
    if (message.content.startsWith(".")) { 
      message.author.send("https://discord.gg/FVUudm5");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == ".") {
            message.channel.send("https://discord.gg/FVUudm5");
            } else if (message.content == ".") {
            message.channel.send("https://discord.gg/FVUudm5");
            }
        })

     }
  });



client.login("NDU3MjcxNDAzNjk2MzU3Mzc2.DgWqyQ.NBqS7J7j-YXTZRQQ66abRe_KhYQ")
