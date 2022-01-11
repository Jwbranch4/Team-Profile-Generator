const { TestWatcher } = require("@jest/core");

const Engineer = require("../lib/Engineer");

jest.mock("../lib/Engineer");

test("creates a engineer object", () => {
  const engineer = new Engineer();

  expect(typeof engineer).toBe("object");
});
