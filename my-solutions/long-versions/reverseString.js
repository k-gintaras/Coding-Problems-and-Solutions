// statement: reverse a string
// description: This problem requires you to reverse a given string
// inputExample: Hello World

// i dont remember the library function reverse() and how to use it
// so i will simply read string backwards
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    reversed += letter;
  }
  return reversed;
}

const testInputs = [
  'Hello World',
  'Quick Brown Fox Jumps Over The Lazy Dog',
  [],
  null,
  undefined,
  'string',
  1,
  465,
];

const defaultReturn = '';
testAllInputs();

function testAllInputs() {
  for (let i = 0; i < testInputs.length; i++) {
    const input = testInputs[i];
    const res = reverseStringWithChecks(input);
    console.log(res);
  }
}

function testGoodInput() {
  console.log(reverseString(testInputs[0]));
}

function reverseStringWithChecks(input) {
  // lazy but, didnt want to check for each bad case for such a simple solution
  try {
    return reverseString(input);
  } catch (error) {
    return defaultReturn;
  }
}
