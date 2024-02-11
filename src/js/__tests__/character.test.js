import Character from '../class/Character'

// Создание персонажа
test.each([
  [1, "Bowman"],
  [2, "Swordsman"],
  [3, "Magician"],
  [4,"Undead"],
  [5, "Zombie"],
  [6, "Daemon"],
])("Тест№%i: Тип %s",
(number, type) => {
  let input = ["ivan", type];
  let pers = new Character(...input);
  expect(pers.name).toBe("ivan");
  expect(pers.type).toBe(type);
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
