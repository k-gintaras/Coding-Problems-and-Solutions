// statement: Find the maximum and minimum numbers in an array
// description: This problem requires you to find the highest and lowest numbers in a given array of numbers
// inputExample: [1, 5, 3, 8, 2]

// 0. maybe validate input?
// 1. sort array ascending
// 2. take first as min
// 3. take last as max
// return array [min, max]

function minMaxFinder(arr) {
  const sorted = arr.sort((a, b) => {
    return a - b;
  });
  return [sorted[0], sorted[sorted.length - 1]];
}

const testCases = [
  [1, 5, 3, 8, 2],
  [1],
  [],
  null,
  undefined,
  'string',
  999,
  [1, 2, 3, 0, 11, 2, 15, 'a', 'b', 'c'],
];

const defaultReturn = [];

console.log(minMaxFinder(testCases[0])); // no input check

thoroughTest(); // has input checks, uses multiple cases

function thoroughTest() {
  // test long version
  for (let i = 0; i < testCases.length; i++) {
    const arr = testCases[i];
    const result = minMaxFinderWithChecks(arr);
    console.log(result);
  }
  // test short version
}

function minMaxFinderWithChecks(input) {
  if (!input) {
    return defaultReturn;
  }
  // array too small
  if (input.length < 2) {
    // throw "Can't show min max for less than 2 numbers";
    return defaultReturn;
  }

  // array has no numbers, check that or not?

  try {
    const sorted = input.sort((a, b) => {
      return a - b;
    });
    const min = sorted[0];
    const max = sorted[sorted.length - 1];
    return [min, max];
  } catch (error) {
    // throw "Can't sort array: " + error;
    return defaultReturn;
  }
}
