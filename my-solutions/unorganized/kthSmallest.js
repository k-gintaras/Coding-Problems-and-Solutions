//     statement: Find the kth smallest element in an array
//     description: Given an array of integers, find the kth smallest element in the array
//     inputExample: [3, 5, 2, 4, 1]

// this is considered brute force
export function kthSmallest2(arr, n) {
  // pick a number
  // find all smaller than it  [<----n]
  // if count of those numbers (newArr length) + curDigit === n, then return
  // if
  // yeah but if not we want to move forward and calc bigger digits

  let count = 1; // we count not the array pointer but kth, because we say 1st element is 0th array item
  for (let i = 0; i < arr.length; i++) {
    const currentDigit = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const check = arr[j];
      if (currentDigit > check) {
        count++;
      }
    }
    if (count === n) {
      return currentDigit;
    }
    count = 1;
  }
  return null;
}

// quicksort= divide and conquer basically and use 3 variables, left right and pivot
export function kthSmallest(arr, n) {
  if (!arr) {
    return null; //  answer or null...
  }
  if (arr.length === 1) {
    return n === 1 ? arr[0] : null;
  }

  let smaller = [];
  let larger = [];
  let p = arr[0];
  let duplicates = 0;

  for (let i = 0; i < arr.length; i++) {
    const b = arr[i];
    if (b < p) {
      smaller.push(b);
    } else {
      larger.push(b);
    }
    if (b === p) {
      duplicates++;
    }
  }

  if (smaller.length + 1 === n) {
    return p;
  }

  if (smaller.length + 1 > n) {
    return kthSmallest(smaller, n);
  } else {
    return kthSmallest(larger, n - smaller.length - duplicates); // smaller + some from larger are going to be kth, because larger does not include previous
  }
}
