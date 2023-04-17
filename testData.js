export const array1 = [
  1,
  `hello`,
  true,
  null,
  undefined,
  { name: 'John', age: 30 },
  [1, 2, 3],
  new Date(),
  function () {
    console.log('Function inside array');
  },
  NaN,
];

export const array2 = [
  { id: 1, name: 'apple', price: 2.5 },
  'banana',
  5,
  false,
  'orange',
  null,
  undefined,
  [4, 5, 8],
  function (a, b) {
    return a + b;
  },
  true,
];

export const array3 = [
  new Date(),
  'world',
  function () {
    console.log('Function inside array');
  },
  3,
  ['a', 'b', 'c'],
  8,
  true,
  null,
  { id: 2, name: 'orange', price: 3.5 },
  NaN,
];

export const array4 = [
  1,
  'hello',
  2,
  'world',
  3,
  '!',
  'four',
  'five',
  6,
  'seven',
];

export const array5 = [
  'apple',
  'orange',
  'banana',
  'pear',
  'grape',
  'lemon',
  'cherry',
  'kiwi',
  'strawberry',
  'watermelon',
];

export const array6 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const array7 = [83, 42, 92, 19, 54, 69, 71, 37, 2, 99];

export function getAllArrays() {
  return [array1, array2, array3, array4, array5, array6, array7];
}

export function getHardArrays() {
  return [array1, array2, array3];
}

export function getEasyArrays() {
  return [array4, array5, array6, array7];
}

export function getTextArray() {
  return array5;
}

export function getSortedNumericArray() {
  return array6;
}

export function getNumericArray() {
  return array7;
}

export function getRandomArray() {
  const randomArray = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

// import {getAllArrays,getHardArrays,getEasyArrays,getTextArray,getSortedNumericArray,getNumericArray,getRandomArray} from './testData.js'
