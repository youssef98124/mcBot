const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
let words = [السلام عليكم,https://discord.gg/6Vc9ju,رابط,هلا]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(${words[Math.floor(Math.random() * words.length)]}) 
}).catch(console.error)
}, timer)
})

client.login('NDU3MjcxNDAzNjk2MzU3Mzc2.DgWqyQ.NBqS7J7j-YXTZRQQ66abRe_KhYQ');
