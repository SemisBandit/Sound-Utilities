const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
    if(msg.channel.type == 'DM') return;
    const content = args.join(" ").slice(args[0].length);
    if(!msg.member.permissions.has("MANAGE_MESSAGES")) return message.delete();
 
    const contenta = args[0]
     if (!args.length) return msg.reply('Specify a reason for me to lock')
 
     if (!contenta) return msg.reply('Specify a reason for me to lock')
 
 if (args[0] == "-all") {
 
     
     if(!content) return msg.channel.send('Specify a reason to lock')



        msg.channel.send(`unLocking Started...`)

        let embed = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setTitle('**Server Unlocked**\n__You were not muted, everyone can now talk__')
        .setDescription('Lockdown is now complete. you can continue chatting')
        .addField("Reason:", `${content}`)
        msg.channel.send({ embeds: [ embed ]})
        const channel1 = ``
        const channel2= ``
        const channel3 = ``
        const channel4 = ``
        const channel5 = ``
        const channel6 = ``
        const channel7 = ``
        const channel8 = ``
        const channel9 = ``
        const channel10= ``
        const channel11= ``
        const channel12 = ``
        const channel13= ``
        const channel14= ``
        const channel15= ``
        const channel16 = ``
        const channel17= ``
        const channel18= ``
        const channel19 = ``
        const channel20 = ``
        const channel21 = ``
        const channel22= ``
        const channel23 = ``
        const channel24 = ``
        const channel25= ``
        const channel26 = ``
        const channel27 = ``
        const channel28 = ``
        const channel29= ``
        const channel30= ``
        const channel31= ``
        const channel32 = ``
        const channel33= ``
        const channel34= ``
        const channel35= ``
        const channel36 = ``
        const channel37= ``
        const channel38= ``
        const channel39 = ``
        const channel40 = ``
        const channel41= ``
        const channel42= ``
        const channel43 = ``
        const channel44= ``
        const channel45= ``
        const channel46 = ``
        const channel47 = ``
        const channel48= ``
        const channel49 = ``
        const channel50= ``
        const channel51= ``
        const channel52 = ``
        const channel53 = ``
        const messagee = `This channel has been unlocked. You may start chatting again.` //ALR SO IN UP ADD THE CHANNELS ID IF U DONT WANT CHANENLS LIKE THIS DELETE IT
    
        var channel1s = msg.guild.channels.cache.get(channel1);
        var channel2s = msg.guild.channels.cache.get(channel2);
        var channel3s = msg.guild.channels.cache.get(channel3);
        var channel4s = msg.guild.channels.cache.get(channel4);
        var channel5s = msg.guild.channels.cache.get(channel5);
        var channel6s = msg.guild.channels.cache.get(channel6);
        var channel7s = msg.guild.channels.cache.get(channel7);
        var channel8s = msg.guild.channels.cache.get(channel8);
        var channel1s = msg.guild.channels.cache.get(channel9);
        var channel2s = msg.guild.channels.cache.get(channel10);
        var channel3s = msg.guild.channels.cache.get(channel11);
        var channel5s = msg.guild.channels.cache.get(channel12);
        var channel7s = msg.guild.channels.cache.get(channel13);
        var channel8s = msg.guild.channels.cache.get(channel14);
        var channel9s = msg.guild.channels.cache.get(channel15);
        var channel10s = msg.guild.channels.cache.get(channel16);
        var channel7s = msg.guild.channels.cache.get(channel17);
        var channel8s = msg.guild.channels.cache.get(channel18);
        var channel9s = msg.guild.channels.cache.get(channel19);
        var channel10s = msg.guild.channels.cache.get(channel20);
        channel1s.send(messagee)
        channel2s.send(messagee)
        channel3s.send(messagee)
        channel4s.send(messagee)
        channel5s.send(messagee)
        channel6s.send(messagee)
        channel7s.send(messagee)
        channel8s.send(messagee)
        channel9s.send(messagee)
        channel10s.send(messagee)
        channel11s.send(messagee)
        channel12s.send(messagee)
        channel13s.send(messagee)
        channel14s.send(messagee)
        channel15s.send(messagee)
        channel16s.send(messagee)
        channel17s.send(messagee)
        channel18s.send(messagee)
        channel19s.send(messagee)
        channel20s.send(messagee)
     
        msg.guild.channels.cache.filter(channel => channel.name).forEach(async channel => {
            if(msg.channel)
            channel.permissionOverwrites.create(msg.guild.roles.everyone,{
                SEND_MESSAGES : true
            })
    })
   } else {
      let channel = msg.mentions.channels.first() || msg.channel;
    let check = channel.permissionsFor(msg.guild.roles.everyone).has("SEND_MESSAGES");

    if(check) {
        return msg.channel.send(`Sorry dude. Channel: ${channel} isn't locked!`);
    }

    let embeda = new Discord.MessageEmbed()
    .setColor('AQUA')
    .setTitle('**Channel Locked**')
    .setDescription('__You are not muted, noone can talk.__\n\n Please do not contact any staff members to ask why, updates will be posted here eventually. More information')
    .addField("Reason:", `${contenta}`)

    channel.permissionOverwrites.create(msg.guild.roles.everyone, {
        SEND_MESSAGES: true
    })
    .then(() => {
        msg.channel.send('Locking is starting.....')
        msg.channel.send({ embeds: [ embeda ]})
    })
    .catch(() => {
        return msg.channel.send(`I dont have high enough permission to unlock the channel!`)
    })
  }
}


module.exports.help = {
    name: 'unlock',
    aliases: []
  }