

class Character {
    constructor(name) {
        this.name = name;
        this.maxHp = 5
        this.currentHp = 5
        this.maxMp = 15;
        this.currentHp = 15
        this.int = Math.random() * 10
        this.vit = Math.random() * 10
        this.dex = Math.random() * 10
        this.spellsKnown = []
        this.inventory = []
    }

    setName = (name) => {
        this.name = name
    }

    getName = () => {
        return this.name
    }


}

export default Character
