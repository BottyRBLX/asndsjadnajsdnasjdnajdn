const rbx = require('roblox-js')
exports.run = function(bot, message, args){
    if(!args[0]){
          return message.channel.send('Please provide a valid group ID!')
         } 
  rbx.login('CowCowOfficial', 'sophia223')
    .then(function(){
      rbx.getShout(args[0])
      .then(function(shout){
          message.channel.send(`Shout: ${shout.message}\nAuthor: ${shout.author.name}`)
      })
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gs'],
  permLevel: 0
};

exports.help = {
  name: 'getshout',
  description: 'Gets shout.',
  usage: 'getshout'
};
