var SlackMessage = require('./SlackMessage');
var User         = require('./User');

class SlackCommand extends SlackMessage{
    constructor(message){
        super(message);

        this._args    = this.getText().split(' ');

        for(var arg in this._args) if(this._args[arg].trim() == '') args.splice(arg, 1);

        this._name    = this._args[1];

        this._args.splice(0,2);
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