var Command = require('./Command');

class CommandUtil{
    constructor(commands){
        this._commands = commands;
    }

    get(name){
        var command = this._commands[name.toLowerCase()];
        if(!command) return null;
        return new Command(command);
    }

    getCommands(){
        return this._commands;
    }
}

module.exports = CommandUtil;