var MinecraftBot = require('./minecraft/MinecraftBot');
var Commands     = require('./commands/Commands');
var Objects      = require('./objects/Objects');
var SlackBot     = require('./slack/SlackBot');

//console.log(Objects);

module.exports = {
    Objects:      Objects,
    MinecraftBot: MinecraftBot,
    SlackBot:     SlackBot,
    Commands:     Commands
};