var SlackMessage = require('./SlackMessage');
var User         = require('./User');

var log = require('frozor-logger')

class SlackCommand extends SlackMessage{
    /**
     *
     * @param message - A JSON message object from the slack API
     * @param args_before - The amount of args (words) before the actual command. This is 1 by default because the default usage for commands is @botuser command_name args
     */

    constructor(message, args_before){
        args_before = (args_before != undefined) ? args_before : 1;

        super(message);

        this._args    = this.getText().split(' ');

        for(var arg in this._args) if(this._args[arg].trim() == '') this._args.splice(arg, 1);

        this._name    = this._args[args_before];

        this._args.splice(0, args_before+1);
    }

    getName(){
        return this._name;
    }

    getArgs(){
        return this._args;
    }

    getArg(index){
        if(index > this._args.length-1) return null;
        return this.getArgs()[index];
    }
}

module.exports = {
    slack: SlackCommand
};