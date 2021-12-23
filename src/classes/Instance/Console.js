const {post} = require("axios")
class Console {
    constructor(client, instance) {
        /**
         * @private
         */
        this._client = client;
        /**
         * @private
         * @type {import("../Instance")}
         * */
        this.instance = instance;
    }
    verify(token) {
        if (this._client.api != "admin") throw new Error("You can't use this method in client API");
        return new Promise(async (resolve, reject) => {
            try {
                await post(`${this._client.url}/api/v1/admin/servers/${this.instance.id}/console/verify`, {
                    access_token: token
                },{
                    headers: {
                        "Authorization": `Bearer ${this._client.apiKey}`,
                    }
                });
            } catch (error) {
                return resolve(false);
            }
            return resolve(true)
        })
    }
}
module.exports = Console;