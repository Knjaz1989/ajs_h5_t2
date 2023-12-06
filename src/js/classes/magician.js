import { Character } from "./character.js";


export class Magician extends Character {
  constructor (name, type) {
    super(name, type, 10, 40);
  }
}