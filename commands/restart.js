const exec = require('child_process').exec;

exports.run = function(bot, message, args){
  message.channel.send('Restarting...')
  bot.destroy()
  var cmd = 'node eris.js'
  exec(cmd, function(error, stdout, stderr) {
    console.log(error)
  })
  bot.login('MzIzMDc5ODM4NjA2OTUwNDEw.DB17Dw.1slqAIWNwOaIIVxBMOCfV2OLiu8')
  console.log('Back up!')
  message.channel.send('Successfully restarted by ' + message.author)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rs'],
  permLevel: 6
};

exports.help = {
  name: 'restart',
  description: 'Developer only, restarts bot.',
  usage: 'restart'
};
