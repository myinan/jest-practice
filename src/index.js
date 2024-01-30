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

// An analyzeArray function that takes an array of numbers,
// and returns an object with the following properties: average, min, max, and length.

// Helper sort function
function bubbleSort(array) {
  const arr = [...array];
  const len = arr.length;
  for (let i = 0; i < len - 1; i += 1) {
    for (let j = 0; j < len - 1 - i; j += 1) {
      // Swap if the element found is greater than the next element
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function analyzeArray(arr) {
  const total = arr.reduce((acc, current) => acc + current, 0);
  const avg = total / arr.length;
  const sortedArr = bubbleSort(arr);

  const obj = {
    average: avg.toFixed(2),
    min: sortedArr[0],
    max: sortedArr[sortedArr.length - 1],
    length: sortedArr.length,
  };

  return obj;
}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
