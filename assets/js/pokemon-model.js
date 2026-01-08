class Pokemon {
    constructor(data) {
        this.number = data.id;
        this.name = data.name;
        const types = data.types.map((typeSlot) => typeSlot.type.name);
        const [type] = types;
        this.types = types;
        this.type = type;
        this.photo = data.sprites.other.dream_world.front_default;
    }
}