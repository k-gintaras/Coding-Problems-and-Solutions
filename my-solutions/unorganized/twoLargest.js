// statement: find the two largest numbers in an array
// description: This problem requires you to find the two largest numbers in an array of numbers.
// inputExample: [1, 5, 8, 3, 10, 6]

/**
 * @function
 * @param {[number, number, number]}
 * @returns [n, m]
 * @returns [n, 0] if one bad input
 * @returns [0, 0] if both bad input
 * @returns [0, 0] if both inputs the same, bad input
 */
export function twoLargest(arr) {
  // find first largest after sorting and then second largest ?
  // what if last 2 are the same?
  // make a set
  // sort
  if (!arr) {
    return [0, 0];
  }
  const set = new Set(arr);
  arr = Array.from(set);
  if (arr.length < 2) {
    arr.push(0);
  }
  const sorted = arr.sort();

  return [sorted[sorted.length - 1], sorted[sorted.length - 2]];
}

export function twoLargestManual(arr) {
  let first = 0;
  let second = 0;
  let hashmap = {}; // so we dont show 2 of the same if they repetat
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (!hashmap[n]) {
      // we havent seen this number yet
      hashmap[n] = 1;
      if (first < n) {
        first = n;
      } else {
        if (second < n) {
          second = n;
        }
      }
    }
  }

  return [first, second];
}
