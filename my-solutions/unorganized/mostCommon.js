// statement: find the most common element in an array
// description: This problem requires you to find the element that appears most frequently in an array of elements.
// inputExample: [1, 2, 3, 3, 4, 4, 4]

/**
 * @function
 * @param [number, number]
 * @returns number that is largest most common
 *
 */
export function mostCommon(arr) {
  // what if there is 2 most commons?
  // finish function, remove that number
  // repeat until ah... it is same amount of times that it is counted
  const hashMap = {}; // since we counting uniques only and we dont want to use SET
  let common = { n: 0, count: 0 };
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (!hashMap[n]) {
      // it is unique
      hashMap[n] = 1; // no point counting as happening once cannot be most frequent
    } else {
      hashMap[n]++;
      const count = hashMap[n];
      // what if the number is the same count but larger
      // we return largest most common then
      if (common.count == count) {
        if (common.n < n) {
          common.n = n;
        }
      }
      if (common.count < count) {
        // whatever the number it's count is larger
        common.n = n;
        common.count = count;
      }
    }
  }
  return common.n;
}
