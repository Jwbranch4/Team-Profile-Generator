const { TestWatcher } = require("@jest/core");
const Intern = require("../lib/intern");

jest.mock("../lib/Intern");

test("creates a intern object", () => {
  const intern = new Intern("James Branch");

  expect(typeof intern).toBe("object");
});
