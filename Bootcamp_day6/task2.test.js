const { penjumlahan, pengurangan, perkalian, pembagian } = require("./task2");
// const pengurangan = require("./task2");s

test("penjumlahan 1 4 5 2 3", () => {
  expect(penjumlahan([1, 4, 5, 2, 3])).toEqual(15);
});

test("pengurangan 10 2 4", () => {
  expect(pengurangan([10, 2, 4])).toEqual(4);
});

test("perkalian 3 5 8", () => {
  expect(perkalian([3, 5, 8])).toEqual(120);
});

test("pembagian 100 5 2", () => {
  expect(pembagian([100, 5, 2])).toEqual(10);
});
