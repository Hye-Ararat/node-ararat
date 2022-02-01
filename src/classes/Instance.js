const Monitor = require("./Instance/Monitor");
const Console = require("./Instance/Console")
const Backup = require("./Instance/Backup");
class Instance {
    /**
     * 
     * @param {import('./Client')} self 
     */
    constructor(self, data) {
        /**
         * @private
         */
        this._client = self;
        this.id = data._id;
        this.name = data.name;
        this.node = data.node;
        this.magma_cube = {
            cube: data.magma_cube.id,
            image: data.magma_cube.image,
        };
        this.network = data.network;
        this.environment = data.environment;
        this.limits = {
            cpu: {
                limit: data.limits.cpu.limit,
                priority: data.limits.cpu.priority,
            },
            memory: {
                limit: data.limits.memory.limit,
                enforce: data.limits.memory.enforce
            },
            disk: {
                priority: data.limits.disk.priority,
            }
        },
            this.type = data.type;
        this.users = data.users;
        if (data.relationships) this.relationships = data.relationships;
    }

    monitor() {
        return new Monitor(this._client, this);
    }
    console() {
        return new Console(this._client, this);
    }
    backup(backup) {
        return new Backup(this._client, this, backup);
    }
}
module.exports = Instance;