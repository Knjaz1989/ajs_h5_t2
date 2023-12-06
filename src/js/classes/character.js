import { checkName, checkType, upSkill } from "../utils.js"


export class Character {
  constructor(name, type, attack, defence) {
    this.name = checkName(name),
    this.type = checkType(type),
    this.attack = attack,
    this.defence = defence,
    this.health = 100,
    this.level = 1
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Hero is already dead");
    }
    this.level += 1;
    this.health = 100;
    this.attack = upSkill(this.attack);
    this.defence = upSkill(this.defence);
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}