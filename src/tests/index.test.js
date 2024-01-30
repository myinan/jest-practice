import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "../index";

test("passed in world is capitalized", () => {
  expect(capitalize("test")).toMatch("Test");
});

test("string is correctly reversed", () => {
  expect(reverseString("Home")).toMatch("emoH");
});

test("Add", () => {
  expect(Calculator.add(5, 7)).toBe(12);
});

test("Subtract", () => {
  expect(Calculator.subtract(10, 4)).toBe(6);
});

test("Divide", () => {
  expect(Calculator.divide(20, 5)).toBe(4);
});

test("Multiply", () => {
  expect(Calculator.multiply(14, 3)).toBe(42);
});

test("Ciphered input text correctly", () => {
  expect(caesarCipher("Hello, World!", 10)).toBe("Rovvy, Gybvn!");
});

test("Analyzed input arr correctly", () => {
  expect(analyzeArray([3, 10, 4, 12, 7, 20])).toEqual({
    average: "9.33",
    min: 3,
    max: 20,
    length: 6,
  });
});
