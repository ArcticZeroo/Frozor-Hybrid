class User{
    constructor(slack_id){
        this.id = slack_id;
    }

    /**
     * @returns {string}
     */
    getID(){
        return this.id;
    }

    /**
     * @returns {string}
     */
    getMention(){
        return `<@${this.getID()}>`;
    }
}
module.exports = User;