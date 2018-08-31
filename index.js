const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log('${bot.user.username} is oline');
    bot.user.setGame("on SouceCade!")
});

bot.on('message', message => {
let responseObjetct = {
    "!google" : "https://www.google.com.br/",
    "!ajuda" : "Duvidas?"
};

if(responseObjetct[message.content]){
    message.channel.send(responseObjetct[message.content]);
}

})

bot.login(botconfig.token);