import Character from '../app';

// Создание персонажа с корректными данными
test.each([
  [1, "Bowman", 25, 25],
  [2, "Swordsman", 40, 10],
  [3, "Magician", 10, 40],
  [4,"Undead", 25, 25],
  [5, "Zombie", 40, 10],
  [6, "Daemon", 10, 40],
])("Тест№%i: Тип %s attack: %i, defence: %i",
(numver, type, attack, defence) => {
  let input = ["ivan", type];
  let pers = new Character(...input);
  expect(pers.name).toBe("ivan");
  expect(pers.type).toBe(type);
  expect(pers.attack).toBe(attack);
  expect(pers.defence).toBe(defence);
})

test("Тест№7: Некорректное имя персонажа (менее 2 символов)", () =>{
  expect(() => new Character("A", "Bowman")).toThrow()
})

test("Тест№8: Некорректное имя персонажа (более 10 символов)", () =>{
  expect(() => new Character("Асклипиодот", "Bowman")).toThrow()
})

test("Тест№9: Некорректный тир персонажа", () =>{
  expect(() => new Character("Bro", "Child")).toThrow()
})

