import { checkName, checkType } from "../src/js/utils.js";


test.each([
  ["b"],
  ["magiciannnn"],
 
])(
  "Check name", (name) => {
    expect(
      () => checkName(name)
    ).toThrow("Name can contain only from 2 to 10 symbols");
  }
);

test.each([
  ["Begemot"],
])(
  "Check name", (type) => {
    expect(
      () => checkType(type)
    ).toThrow("Wrong type");
  }
);