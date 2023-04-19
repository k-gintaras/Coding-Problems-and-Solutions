// statement: find the difference between the largest and smallest elements in an array
// description: This problem requires you to find the difference between the largest and smallest elements in an array of numbers.
// inputExample: [1, 5, 8, 10, 12]
export function findDifference(arr) {
  // sort and math abs
  const sorted = arr.sort((a, b) => {
    return a - b;
  });

  const a = sorted[0];
  const b = sorted[sorted.length - 1];
  const difference = Math.abs(a - b);
  return difference;
}
