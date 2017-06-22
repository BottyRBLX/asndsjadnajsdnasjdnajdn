const settings = require('../settings.json');
const discord = require('discord.js')
const blacklistedids = []
const blackgu = []



module.exports = message => {
  let client = message.client;
    client.user.setGame(`Serving ${client.guilds.array().length} guild(s)!`)
  if (message.author.bot) return;
  if (!message.content.startsWith(settings.prefix)) return;
    if(blacklistedids.indexOf(message.author.id) > -1){
        var em = new discord.RichEmbed()
        .setDescription('Blacklisted User')
        .addField('ERROR', 'You are currently blacklisted from using commands on MaxiBot, please contact Emily#5429 for more info.')
        .setColor('#ff0000')
        .setTimestamp()
        message.channel.sendEmbed(em)
        return;
    }
    if(blackgu.indexOf(message.guild.id) > -1){
        var em = new discord.RichEmbed()
        .setDescription('Blacklisted Guild')
        .addField('ERROR', 'Your guild is currently blacklisted from using commands on MaxiBot, please contact Emily#5429 for more info.')
        .setColor('#ff0000')
        .setTimestamp()
        message.channel.sendEmbed(em)
        return;
    }
  let unfilcommand = message.content.split(' ')[0].slice(settings.prefix.length);
    let command = unfilcommand.toLowerCase()
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
