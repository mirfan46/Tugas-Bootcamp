const sendGetRequest = require("./task10");

test("arraynya harusnya ada 100", async () => {
  const data = await sendGetRequest();
  expect(data).toBe(100);
});

// test("the fetch fails with an error", async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch("error");
//   }
// });
