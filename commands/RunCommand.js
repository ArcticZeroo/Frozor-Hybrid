var Error          = require('../objects/Error');
var Command        = require('../objects/Command');
var CommandMessage = require('../objects/CommandMessage')

/**
 * @param {SlackMessage} SlackMessage
 * @param {CommandUtil} CommandUtil
 * @param {function} callback
 * @returns {*}
 */
function runCommand(commandMessage, CommandUtil, callback){
    if(!callback) return;

    //Creates an instance of Command using the commandMessage's command name method.
    /**
     * @type {Command}
     */
    var command = CommandUtil.get(commandMessage.getName());

    //If the command is an alias, it the `command` object will be turned into the one for the alias.
    if(command && command.isAlias()) command = command.getAlias(CommandUtil);

    //If the command doesn't actually exist... don't run it.
    if(!command) return callback(command, Error.COMMAND_UNDEFINED);

    if(command.disabled) return callback(command, Error.COMMAND_DISABLED)

    //Ensures that the command has the correct amount of arguments
    if(commandMessage.getArgs().length > command.getMax()) return callback(command, Error.COMMAND_TOO_MANY_ARGS);
    if(commandMessage.getArgs().length < command.getMin()) return callback(command, Error.COMMAND_NOT_ENOUGH_ARGS);

    return callback(command);
}

exports.run = runCommand;