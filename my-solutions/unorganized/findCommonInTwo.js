//     statement: Find the common elements in two sorted arrays
//     description: Given two sorted arrays, find the common elements in them
//     inputExample: [1, 3, 4, 6, 7, 9] and [1, 2, 4, 5, 9, 10]

export function findCommonInTwo(arr1, arr2) {
  // join both and count if more than once
  // what if each array has unique more than once
  // make each array to sets, then merge, then more than once
  // otherwise you have to read each val and check each val in other?
  // (setA (common) setB)

  // make 2 sets
  const s1 = new Set(arr1);
  const s2 = new Set(arr2);
  const ar1 = Array.from(s1);
  const ar2 = Array.from(s2);

  // join both arrays
  const joined = ar1.concat(ar2);
  const hashMap = {};
  const common = [];

  // value that happens more than once is common value
  for (let i = 0; i < joined.length; i++) {
    const n = joined[i];
    if (!hashMap[n]) {
      hashMap[n] = 1;
    } else {
      common.push(n);
    }
  }

  return common;
}
