import { Bowman } from "../src/js/classes/bowman.js";
import { Magician } from "../src/js/classes/magician.js";
import { Swordsman } from "../src/js/classes/swordsman.js";
import { Undead } from "../src/js/classes/undead.js";
import { Zombie } from "../src/js/classes/zombie.js";
import { Daemon } from "../src/js/classes/daemon.js";
import { Character } from "../src/js/classes/character.js";


test.each([
  ["bowman", "Bowman", Bowman],
  ["magician", "Magician", Magician],
  ["swordsman", "Swordsman", Swordsman],
  ["daemon", "Daemon", Daemon],
  ["undead", "Undead", Undead],
  ["zombie", "Zombie", Zombie]
])(
  "Check hero", (name, type, model) => {
    const hero =  new model(name, type,);
    expect(hero).toBeInstanceOf(model);
  }
);
