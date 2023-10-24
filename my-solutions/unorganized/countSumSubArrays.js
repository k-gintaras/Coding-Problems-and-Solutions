//     statement: find the number of subarrays with a given sum
//     description: This problem involves finding the number of subarrays in an array that have a given sum
//     inputExample: [1,2,3,4,5] and sum = 8

export function countSumSubArrays(arr, k) {
  const map = { 0: 1 };
  let count = 0;
  let sum = 0; // just add all nonstop

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    const difference = sum - k;
    if (map[difference]) {
      count += map[difference]; // found a sum that is in the map
    }
    if (map[sum]) {
      map[sum]++;
    } else {
      map[sum] = 1;
    }
  }
  return count;
}

// subarray is a sequence not a subsequence, so it must be continuous
// should work but for some reason doesnt, even chat gpt cant help
// it is n^3, for each i we check j to k sums
function bruteForce(arr, n) {
  // maybe not
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    const count = countFrom(arr, i, n);
    console.log(`Count from index ${i}: ${count}`);
    counter += count;
  }
  return counter;
}

function countFrom(arr, i, n) {
  let counter = 0;
  for (let j = i + 1; j < arr.length; j++) {
    // however many digits to the end
    const sum = sumFrom(arr, i, j);
    console.log(`Sum from ${i} to ${j}: ${sum}`);
    if (sum === n) {
      counter++;
    }
  }
  return counter;
}

function sumFrom(arr, i, howManyDigits) {
  let sum = 0;
  for (let k = i; k <= howManyDigits; k++) {
    sum += arr[k];
  }
  return sum;
}

// this brute force should work but it doesnt... so weird...
/**
 * Count the number of subarrays that sum up to a given value.
 * This function uses a brute-force approach with a time complexity of O(n^3).
 *
 * @param arr - The input array.
 * @param target - The target sum.
 * @returns The number of subarrays that sum up to the target.
 */
export function countSumSubArrays2(arr, target) {
  let count = 0;

  // Loop through each starting index for the subarray
  for (let i = 0; i < arr.length; i++) {
    // Loop through each ending index for the subarray
    for (let j = i; j < arr.length; j++) {
      let sum = 0;

      // Calculate the sum of the subarray from i to j
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }

      // Check if the sum matches the target
      if (sum === target) {
        count++;
      }
    }
  }

  return count;
}
