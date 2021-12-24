const Instance = require("./Instance");
const { get } = require("axios");
class Client {
    /**
     * Creates Ararat Client
     * @param {*} url Ararat Panel URL
     * @param {*} apiKey Ararat Panel API Key
     * @param {*} api admin or client API
     */
    constructor(url, apiKey, api) {
        /**
         * @private
         */
        this.url = url;
        /**
         * @private
         */
        this.apiKey = apiKey;
        /**
         * @private
         */
        this.api = api;
    }

    /**
     * Gets a single instance
     * @param {string} instanceId Instance ID
     * @returns {Promise<Instance | null>} Returns instance or null if not found
     */
    instance(instanceId, include) {
        return new Promise(async (resolve, reject) => {
            try {
                var instance_data = await get(`${this.url}/api/v1/${this.api}/instances/${instanceId}` + (include ? `?include=${include}` : ""), {
                    headers: {
                        "Authorization": `Bearer ${this.apiKey}`
                    }
                });
            } catch (error) {
                return reject(error);
            }
            instance_data = instance_data.data;
            return resolve(new Instance(this, instance_data))
        })
    }
}
module.exports = Client;