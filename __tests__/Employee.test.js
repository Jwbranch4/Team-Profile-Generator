const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

jest.mock("../lib/Employee");

test("creates a employee object", () => {
  const employee = new Employee("James Branch");

  expect(employee.name).toBe("James Branch");
  expect(employee.id).toEqual(12);
  expect(employee.email).toBe("jwbranch4@gmail.com");
});
