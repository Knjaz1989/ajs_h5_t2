import { checkName, checkType } from "../utils.js"


export class Character {
  constructor(name, type, attack, defence) {
    this.name = checkName(name),
    this.type = checkType(type),
    this.attack = attack,
    this.defence = defence,
    this.health = 100,
    this.level = 1
  }
}