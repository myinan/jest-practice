import { capitalize, reverseString } from "../index";

test("passed in world is capitalized", () => {
  expect(capitalize("test")).toMatch("Test");
});

test("string is correctly reversed", () => {
  expect(reverseString("Home")).toMatch("emoH");
});
