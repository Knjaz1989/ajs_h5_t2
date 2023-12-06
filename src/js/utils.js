export function checkName (name) {
  if (name.length < 2 || name.length > 10) {
    throw new Error("Name can contain only from 2 to 10 symbols");
  }
  return name
}

export function checkType (type) {
  const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"]
  if (!types.includes(type)) {
    throw new Error("Wrong type");
  }
  return type
}