const { TestWatcher } = require("@jest/core");

const Manager = require("../lib/Manager");

test("create an Manager object", () => {
  const manager = new Manager();

  expect(typeof manager).toBe("object");
});
