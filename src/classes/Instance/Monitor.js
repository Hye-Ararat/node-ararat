class Monitor {
    /**
     * 
     * @param {import("../Client")} client 
     * @param {import("../Instance")} instance 
     */
    constructor(client, instance) {
        /**
         * @private
         */
        this._client = client;
        /**
         * @private
         * @type {import("../Instance")}
        */
       this.instance = instance;
    }
    verify(token) {
        return true;
    }
}
module.exports = Monitor;