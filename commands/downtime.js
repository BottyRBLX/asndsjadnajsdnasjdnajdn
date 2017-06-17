const fs = require('fs')
exports.run = function(bot, message, args){
 let main = require('../maintainance.json')
 if(main.status === true) {
     var maint = {
         status: false,
         reason: ""
     }
     fs.writeFileSync('../maintainance.json', maint, 'utf8')
 } else {
     if(args[0]){
         var maintt = {
             status: true,
             reason: args.join(' ')
         }
         fs.writeFileSync('../maintainance.json', maintt, 'utf8')
         message.channel.send('Successfully enabled downtime for reason: ' + args.join(' '))
     } else {
         message.channel.send('Please specify a reason.')
     }
 }
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dt'],
  permLevel: 4
};

exports.help = {
  name: 'downtime',
  description: 'Developer only, restarts bot.',
  usage: 'downtime <reason>'
};
