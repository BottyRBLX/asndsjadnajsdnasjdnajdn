const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client)






client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 1;
    var guild = message.guild
    var norma = guild.members.find('id', message.author.id)
  var maing = client.guilds.find('id', '325604298182492160')
  let me = maing.members.find('id', message.author.id)
  if(message.author.id === guild.owner.id) permlvl = 3;
  if(me){
  if (me.roles.find('id', '326046236257812485')) permlvl = 4;
  if (me.roles.find('id', '326046245506252802')) permlvl = 5;
  let oarole = message.guild.roles.find('id', '324603477634318337')
  if (me.roles.find('id', '325604423038402561')) permlvl = 6;
  }
  return permlvl;
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.login('MzI1NjAzOTcyOTQ3NjQwMzIx.DChFLQ.y38sZg9HjbZ8HF55nIu0_YTL2xk')
