const exec = require('child_process').exec;

exports.run = function(bot, message, args, perms){
message.channel.send('Your permission level is: ' + perms)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pl'],
  permLevel: 0
};

exports.help = {
  name: 'permlevel',
  description: 'aaaaa.',
  usage: ''
};