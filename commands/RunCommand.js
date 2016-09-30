var Command        = require('../objects/Command');
var CommandMessage = require('../objects/CommandMessage')

/**
 * @param {SlackMessage} SlackMessage
 * @param {CommandUtil} CommandUtil
 * @param {function} callback
 * @returns {*}
 */
function runCommand(SlackMessage, CommandUtil, callback){
    var commandMessage = new CommandMessage(SlackMessage.getMessage());
    var command = CommandUtil.get(commandMessage.getName());
    
    //If the command doesn't exist, return so that isAlias is not undefined.
    if(!command) return callback(false, Error.COMMAND_UNDEFINED);

    //If the command is an alias, it the `command` object will be turned into the one for the alias.
    if(command.isAlias()) CommandUtil.get(command.getAliasName());

    //If the command's alias doesn't exist, don't run it!
    if(!command) return callback(false, Error.COMMAND_ALIAS_UNDEFINED);

    //Ensures that the command has the correct amount of arguments
    if(commandMessage.getArgs().length > command.getMax())
    if(commandMessage.getArgs().length < command.getMin()) return this.getUtils().chat.postMessage(commandMessage.getMessage().getChannel(), `${commandMessage.getMessage().getUser().getMention()} Not enough arguments!`);

    //Emits returns with commandMessage and command so I can have whatever parameters I want
    if(callback) callback(true, {
        message: commandMessage,
        command: command
    });
}

exports.run = runCommand;