const settings = require('../settings.json');
const discord = require('discord.js')
exports.run = function(client, message, args, perms){
  if(!args[0]){
      message.channel.send('Current commands: help')
  } else {
     var command = args.join(' ')
       let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
      if(cmd){
          if (perms < cmd.conf.permLevel) return message.channel.send("You don't have a high enough permission level to view this command.")
          var em = new discord.RichEmbed()
          .addField('Command Name', cmd.help.name)
          .addField('Aliases', cmd.conf.aliases, true)
          .addField('Description', cmd.help.description, true)
          .addField('Usage', cmd.help.usage)
          .addField('Permission Level', cmd.conf.permLevel, true)
          message.channel.sendEmbed(em)
      }
      
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Help command.',
  usage: 'help <command>'
};

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
