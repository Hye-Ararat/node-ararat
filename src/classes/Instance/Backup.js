const { post } = require("axios");

class Backup {
    constructor(client, instance, backup) {
        /**
         * @private
         */
        this._client = client;

        /**
         * @private
         * @type {import("../Instance")}
         */
        this.instance = instance;

        /**
         * @private
         */
        this.backup = backup;
    }

    setState(state) {
        return new Promise(async (resolve, reject) => {
            try {
                await post(`${this._client.url}/api/v1/admin/instances/${this.instance.id}/backups/${this.backup}/state`, {
                    state: state,
                }, {
                    headers: {
                        "Authorization": `Bearer ${this._client.apiKey}`,
                    }
                })
            } catch (error) {
                return resolve(error)
            }
            return resolve()
        })
    }
}
module.exports = Backup;