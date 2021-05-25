const Discord = require('discord.js')
const client = new Discord.Client();

let ozelbilgiler = ["132134", "UserAkmanca"]

let prefix = ''
let token = ''

//let - const - var

// = - == - === - != - ?=

//if - else - elif - else if

//ready - message - guildMemberAdd - guildMemberRemove - userUpdate......


client.on('ready', () => {

console.log('Bot Hazırlandı')

})

// . nunun nunu nunusu


client.on('message', msg => {

if (msg.content == 'ping') {
msg.channel.send("Pong!")
}
})

client.login(token)
