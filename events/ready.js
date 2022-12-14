const { ActivityType } = require('discord.js')
const packagejson = require('../package.json')

module.exports = {
  name: 'ready',
  once: true,
  execute (client) {
    console.log(`Ready! Identifying as ${client.user.tag}`)
    client.user.setActivity(`and listening (v${packagejson.version})`, { type: ActivityType.Playing })
    console.log(`Set activity indicator to "Playing and listening (v${packagejson.version})".`)
  }
}
