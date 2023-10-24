// maximumSumCircular;
//     statement: find the maximum sum of a circular subarray
//     description: A circular subarray is a contiguous subarray of a given array of numbers which starts and ends at the same index
//  The maximum sum of a circular subarray is the maximum sum of all subarrays of the given array
//
//     inputExample: [1, -2, 3, 4]

export function maximumSumCircular(arr) {
  if (!arr) return undefined;
  // kadane twice in one loop
  // one kadane normal
  // one cadane on inverted *-1
  // total sum
  // max normal, total- inverted*-1 (sum of re inverted sum and total)
  return circularKadane(arr);
}

function kadane(arr) {
  let max = arr[0]; // base case
  let previous = arr[0];

  // ignore first as it is already set
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    previous = Math.max(currentValue, previous + currentValue);
    if (previous > max) {
      max = previous;
    }
  }
  return max;
}

function circularKadane(arr) {
  let max = arr[0]; // base case
  let min = arr[0]; // base case
  let previous = arr[0];
  let previousMin = arr[0];
  let total = arr[0];

  // ignore first as it is already set
  for (let i = 1; i < arr.length; i++) {
    const n = arr[i];
    // const inverted = arr[i] * -1;

    //max
    previous = Math.max(n, previous + n);
    max = Math.max(previous, max);

    //min
    previousMin = Math.min(n, previousMin + n);
    min = Math.min(previousMin, min);

    total += n;
  }
  return Math.max(max, total - min);
}

// GPT correction, but it seems to be the same
// basically problem is no *-1, because if it is -1 and min, it turns it back to max :DDD

// function circularKadane(arr) {
//   let max = arr[0];
//   let min = arr[0]; // Start with the first element, not Infinity
//   let previous = arr[0];
//   let previousInverted = arr[0] * -1; // Start with the negated first element
//   let total = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     const currentValue = arr[i];
//     const invertedValue = currentValue * -1;

//     // Calculate max subarray sum using Kadane's algorithm
//     previous = Math.max(currentValue, previous + currentValue);
//     max = Math.max(max, previous);

//     // Calculate min subarray sum using the inverted array
//     previousInverted = Math.min(
//       invertedValue,
//       previousInverted + invertedValue
//     );
//     min = Math.min(min, previousInverted);

//     total += currentValue;
//   }

//   // For the circular sum, you take the total sum and subtract the minimum sum
//   // Then, you compare it with the max subarray sum.
//   return Math.max(max, total - -min);
// }
