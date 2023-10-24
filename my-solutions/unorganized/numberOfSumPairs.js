//     statement: find the number of pairs with a given sum
//     description: Given an array of integers and a sum, find the number of pairs of integers in the array whose sum is equal to the given sum
//
//     inputExample: Array: [1, 2, 3, 4, 5], Sum: 7

export function numberOfSumPairs(arr, n, isUniquesOnly) {
  const hashMap = {};
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    // cant sum itself on last point so len-1
    const a = arr[i];
    if (!hashMap[a]) {
      hashMap[a] = isUniquesOnly;
      for (let j = i + 1; j < arr.length; j++) {
        // no need to recompare with previous values or itself j=i and so i+1
        const b = arr[j];
        if (!hashMap[b]) {
          if (a + b === n) {
            hashMap[b] = isUniquesOnly; // once we found one, next one is duplicate
            console.log(a + '+' + b);
            count++;
          }
        }
      }
    }
  }
  return count;
}
