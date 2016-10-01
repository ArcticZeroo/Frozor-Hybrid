var MinecraftBot = require('./minecraft/MinecraftBot');
var Commands     = require('./commands/Commands');
var SlackBot     = require('./slack/SlackBot');
var Objects      = require('./objects/Objects');

module.exports = {
    Objects:      Objects,
    MinecraftBot: MinecraftBot,
    SlackBot:     SlackBot,
    Commands:     Commands
};