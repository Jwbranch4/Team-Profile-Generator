const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

jest.mock("../lib/Employee");

test("creates a employee object", () => {
  const employee = new Employee("James Branch");

  expect(typeof employee).toBe("object");
});
