const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again !");


Client.on("guildMemberRemove", member => {
  member.send(`***:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..

- دعوة متواضعة لسموك :gem:  !

:fish_cake:  - [‏ https://discord.gg/fCXVdxH  ]***
[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`**:sparkles:  :sparkles:

أهلآ وٰ سهلآ فيك يسعدنآ تواجدك وٰ نتمنى لك أجمل ‏الأوقات في السيرڤر‏ ✯♔
-
سيزداد سيرفرنا بالجّمال عند أنضمامك لقروبنـا حيـاك :heart:️. 
‏

            [ https://discord.gg/fCXVdxH ]
[${member}]**`);

});


Client.login("");
