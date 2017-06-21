const Discord = require('discord.js')

exports.run = function(client, message, args){
  let reason = args.join(' ');
  let user = message.mentions.users.first();
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
    .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
  //message.channel.sendMessage(user.tag + ` - have recived a warning for: ` + reason + ` - from: ` + message.author.tag);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['w'],
  permLevel: 3
};

exports.help = {
  name: 'warn',
  description: 'Warns a user.',
  usage: 'warn <@user>'
};