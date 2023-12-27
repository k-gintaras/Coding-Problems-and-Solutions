// maxSumCircularSubArray2;
//     statement: find the maximum subarray sum in a circular array
//     description: A circular array is an array where the last element is connected to the first element, forming a loop
//  The maximum subarray sum is the maximum sum of a subarray in the array, taking into account the loop
//
//     inputExample: [2, -1, 3, 4, -5]

export function maxSumCircularSubArray2(arr) {
  //   using kadane but for max sum, min sum
  // because we use kind of like set theory, total sum - minSum = maxSum
  // but max sum find could still be max so we compare max(max, sum-minSum)
  let previousMax = arr[0];
  let max = arr[0];
  let previousMin = arr[0];
  let min = arr[0];
  let total = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    previousMax = Math.max(previousMax + val, val);
    previousMin = Math.min(previousMin + val, val);
    total += val;
    max = Math.max(max, previousMax);
    min = Math.min(min, previousMin);
  }

  // If total == min, it means all numbers are negative,
  // and the max subarray sum is the max single element.
  if (total === min) {
    return max;
  }

  return Math.max(max, total - min);
}
