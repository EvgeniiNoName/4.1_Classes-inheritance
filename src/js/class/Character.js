export default class Character  {
  constructor(name, type) {
    const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    if (name.length < 2 || name.length > 10) {
      throw Error("Invalid name for character")
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw Error("Invalid type for character")
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }
}

