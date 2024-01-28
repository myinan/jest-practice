import "./style.css";

// 1. A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(word) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalized;
}

// 2.  reverseString function that takes a string and returns it reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}

export { capitalize, reverseString };
