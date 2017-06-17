exports.run = function(bot, message, args){
  function doMagic8BallVoodoo() {
      var rand = ['Yes.', 'No.', 'Why are you even trying?', 'What do you think? NO', 'Maybe.', 'Never.', 'Yep!', 'Definitely!', 'Ask me again later.'];

      return rand[Math.floor(Math.random()*rand.length)];
  }

if(args[0]){
message.channel.send(doMagic8BallVoodoo())
} else {
  message.channel.send('Please ask a valid question!')
}

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['8ball'],
  permLevel: 1
};

exports.help = {
  name: '8ball',
  description: 'aaaaa.',
  usage: '8ball <question>'
};
