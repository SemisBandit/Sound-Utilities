const Discord = require('discord.js')

exports.run =  async(client, msg, args) => {
    var rule1 = new Discord.MessageEmbed()
    .setTitle('Rule #18:')
    .setDescription('Do not post Memes in General')
    .setFooter('Follow These rules to Stay Safe')
    .setTimestamp();
    msg.channel.send(rule1)
}