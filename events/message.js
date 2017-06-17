const settings = require('../settings.json');
 const main = JSON.parse(fs.readFileSync('../maintainance.json'))
module.exports = message => {
  let client = message.client;
    client.user.setGame(`Serving ${client.guilds.array().length} guild(s)!`)
  if (message.author.bot) return;
    if(main.status === true && !message.member.roles.find('id', '325604423038402561')) return; 
  if (!message.content.startsWith(settings.prefix)) return;
  let unfilcommand = message.content.split(' ')[0].slice(settings.prefix.length);
    let command = unfilcommand.toLowerCase()
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
