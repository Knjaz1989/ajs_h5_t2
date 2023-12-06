import { Character } from "./character.js";


export class Daemon extends Character {
  constructor (name, type) {
    super(name, type, 10, 40);
  }
}