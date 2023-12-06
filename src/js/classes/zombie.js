import { Character } from "./character.js";


export class Zombie extends Character {
  constructor (name, type) {
    super(name, type, 40, 10);
  }
}