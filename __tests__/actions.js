import { Bowman } from "../src/js/classes/bowman.js";


test("Check levelUp throw", () => {
    const hero =  new Bowman("hero", "Bowman");
    hero.health = 0;
    expect(
      () => hero.levelUp()
    ).toThrow("Hero is already dead");
  }
);

test("Check levelUp ok", () => {
    const hero =  new Bowman("hero", "Bowman");
    hero.levelUp();
    expect(hero.level).toBe(2);
  }
);

test.each([
  [100, 50, 62.5],
  [0, 50, 0],
])(
  "Check damage", (health, points, expected) => {
    const hero =  new Bowman("hero", "Bowman");
    hero.health = health;
    hero.damage(points);
    expect(hero.health).toBe(expected);
  }
);