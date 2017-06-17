const rbx = require('roblox-js')
exports.run = function(bot, message, args){
    if(!args[0]){
          return message.channel.send('Please provide a valid username')
         } 
  rbx.login('CowCowOfficial', 'sophia223')
    .then(function(){
      rbx.getIdFromUsername(args[0])
      .then(function(user){
          rbx.getBlurb(user)
          .then(function(blurb){
              message.channel.send(`${args[0]}'s blurb is: \n${blurb}`)
          })
      })
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gb'],
  permLevel: 4
};

exports.help = {
  name: 'getblurb',
  description: 'Gets shout.',
  usage: 'getshout'
};
