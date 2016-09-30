class Command{
    constructor(json){
        this._json       = json;
        this._name       = json.name;
        this._args       = json.args;
        this._process    = json.process;
        this._alias      = json.alias;
        this._successful = true;
        this._message    = null;
    }

    isAlias(){
        if(this._alias) return true;
        return false;
    }

    getAliasName(){
        return this._alias;
    }

    getAlias(CommandUtil){
        if(!this.isAlias()) return null;
        return CommandUtil.get(this.getAliasName());
    }

    getJSON(){
        return this._json;
    }

    getName(){
        return this._name;
    }

    getFinalName(){
        if(this.isAlias()) return this.getAliasName();
        return this.getName();
    }

    getArgs(){
        return this._args;
    }

    getMax(){
        return this._args.max;
    }

    getMin(){
        return this._args.min;
    }

    getProcess(){
        return this._process;
    }

    setMessage(message){
        this._message = message;
    }

    getMessage(){
        return this._message;
    }

    /**
     * @param {Boolean} bool
     */
    setSuccessful(bool){
        this._successful = bool;
    }

    isSuccessful(){
        return this._successful
    }
}

module.exports = Command;