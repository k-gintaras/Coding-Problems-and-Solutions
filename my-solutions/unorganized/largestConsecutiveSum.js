largestConsecutiveSum;

//     statement: find the largest sum of a consecutive subarray
//     description: Given an array of integers, find the largest sum of a consecutive subarray
//     inputExample: [-2,1,-3,4,-1,2,1,-5,4]

// following each other
// this is semi brute force
export function largestConsecutiveSumBruteForce(arr) {
  let largest = 0;
  let latest = 0;
  let currentPos = 0;
  while (currentPos < arr.length) {
    latest = 0;
    for (let i = currentPos; i < arr.length; i++) {
      const n = arr[i];
      latest += n;
      if (largest < latest) {
        largest = latest;
      }
    }
    currentPos++;
  }
  return largest;
}

// Kadane's algorithm
export function largestConsecutiveSum(arr) {
  let largest = arr[0]; // in case there is super negative numbers
  let currentLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    const cur = currentLargest + n;
    // we cause the shift we achieved before with 2 loops
    // by detecting if adding makes it smaller, if not then keep adding
    currentLargest = Math.max(n, cur);
    // instead of using if, we just pick largest value
    largest = Math.max(currentLargest, largest);
  }
  // in case all of the sums failed
  return largest;
}
