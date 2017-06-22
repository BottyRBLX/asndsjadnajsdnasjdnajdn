const discord = require('discord.js')

exports.run = function(client, message, args){
  try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
        
      
      var embed = new discord.RichEmbed()
      .addField('Output', clean(evaled))
      .setColor("#8000ff")
      .setTimestamp()
      .setFooter('eval')
      message.channel.sendEmbed(embed)
    }  catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 6
};

exports.help = {
  name: 'eval',
  description: 'Can only be used by developers, executes code on the client and it returns it',
  usage: 'eval <code>'
};

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
