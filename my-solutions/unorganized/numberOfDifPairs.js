//     statement: find the number of pairs with a given difference
//     description: Given an array of integers and a number, find the number of pairs of integers in the array that have a difference equal to the given number
//     inputExample: Array = [1, 5, 3, 4, 2], Difference = 2

export function numberOfDifPairs(arr, n, uniquesOnly) {
  const hashMap = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    // no uniques only this will always be true
    if (!hashMap[a]) {
      hashMap[a] = uniquesOnly;
      // we dont want to recompare same items, so we compare the next value +1, each time we move forward
      for (let j = i + 1; j < arr.length; j++) {
        const b = arr[j];
        // we dont want to compare against itself even if it repeats
        if (!hashMap[b]) {
          const dif = Math.abs(a - b);
          if (dif === n) {
            console.log(a + ' ' + b);
            count++;
            // once counted, if we want uniques only, dont check
            hashMap[b] = uniquesOnly;
          }
        }
      }
    }
  }
  return count;
}
