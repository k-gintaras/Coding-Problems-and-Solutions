// statement: reverse an array
// description: This problem requires you to reverse the order of elements in an array
// inputExample: [1,2,3,4,5]
/**
 * @function
 * @param [m,n] whatever really doesnt matter
 * @return [n,m] reversed order
 */
export function reverseArray(arr) {
  // just read backwards
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const n = arr[i];
    reversed.push(n);
  }
  return reversed;
}
