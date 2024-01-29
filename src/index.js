import "./style.css";

// 1. A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(word) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalized;
}

// 2. reverseString function that takes a string and returns it reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 3. A calculator object that contains functions for the basic operations:
// add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.
class Calculator {
  static add(numF, numS) {
    return numF + numS;
  }

  static subtract(numF, numS) {
    return numF - numS;
  }

  static divide(numF, numS) {
    return numF / numS;
  }

  static multiply(numF, numS) {
    return numF * numS;
  }
}

// 4. A caesarCipher function that takes a string and a shift factor,
// and returns it with each character “shifted”.
function caesarCipher(text, shiftF) {
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const shiftedText = [];
  const textArr = text.split("");

  textArr.forEach((char) => {
    if (alphabetLowerCase.includes(char)) {
      shiftedText.push(
        alphabetLowerCase[(alphabetLowerCase.indexOf(char) + shiftF) % 26],
      );
    } else if (alphabetUpperCase.includes(char)) {
      shiftedText.push(
        alphabetUpperCase[(alphabetUpperCase.indexOf(char) + shiftF) % 26],
      );
    } else {
      shiftedText.push(char);
    }
  });

  return shiftedText.join("");
}

export { capitalize, reverseString, Calculator, caesarCipher };
