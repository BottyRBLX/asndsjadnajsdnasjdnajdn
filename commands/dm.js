exports.run = function(client, message, args){
 let me = message.member
 me.send("Hi, this is a bot that is currently in development, if you'd like to help please contact Emily#5429")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm'],
  permLevel: 0
};

exports.help = {
  name: 'dm',
  description: 'DMs some jazz.',
  usage: 'DM'
};

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
