const fs = require('fs')
exports.run = function(bot, message, args){
 let main = require('../maintainance.json')
 let string = JSON.stringify('.//')
 if(main.status === true) {
     var maint = {
         status: false,
         reason: ""
     }
     let dataa = JSON.stringify(maint)
     fs.writeFile('../maintainance.json', dataa, 'utf8')
 } else {
     if(args[0]){
         var maintt = {
             status: true,
             reason: args.join(' ')
         }
         let boob = JSON.stringify(maintt)
         fs.writeFile('../maintainance.json', boob, 'utf8')
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
