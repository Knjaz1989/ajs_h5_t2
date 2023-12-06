import { Character } from "./character.js";


export class Undead extends Character {
  constructor (name, type) {
    super(name, type, 25, 25);
  }
}