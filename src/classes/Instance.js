class Instance {
    /**
     * 
     * @param {import('./Client')} self 
     */
    constructor(self, data) {
        this.id = data._id;
        this.name = data.name;
        this.node = data.node;
        this.magma_cube = {
            cube: data.magma_cube.cube,
            image_group: data.magma_cube.image_group,
            image_index: data.magma_cube.image_index,
        };
        this.network = data.network;
        this.env = data.env;
        this.limits = {
            cpu: data.limits.cpu,
            memory: data.limits.memory,
            disk: data.limits.disk
        },
        this.type = data.type;
        this.users = data.users;
        if (data.relationships) this.relationships = data.relationships;
    }
}
module.exports = Instance;