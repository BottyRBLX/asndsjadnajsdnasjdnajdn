module.exports = client => {
  console.log(`Ready! Serving ${client.guilds.array().length} guild(s)`)
    client.user.setGame(`Serving ${client.guilds.array().length} guild(s)!`)
};
