const rbx = require('roblox-js')
exports.run = function(bot, message, args){
    if(!args[0]){
          return message.channel.send('Please provide a valid groupID/message!')
         } 
  rbx.login('CowCowOfficial', 'sophia223')
    .then(function(){
      let gid = args[0]
      let msg = message.content.split(' ').slice(2).join(' ')
      rbx.post(gid, msg)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['post'],
  permLevel: 3
};

exports.help = {
  name: 'post',
  description: 'Gets shout.',
  usage: 'getshout'
};
