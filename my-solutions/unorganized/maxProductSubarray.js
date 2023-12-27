// maxProductSubarray;

//     statement: find the maximum product subarray
//     description: Given an array of integers, find the subarray with the maximum product
//     inputExample: [-2, 3, -4]

// memorization practice
export function maxProductSubarray(arr) {
  let prevMax = arr[0];
  let prevMin = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    const newMax = prevMax * val;
    const newMin = prevMin * val;

    prevMax = Math.max(val, newMax, newMin);
    prevmin = Math.max(val, newMax, newMin);

    max = Math.max(max, prevMax);
  }
  return max;
}

// with help of gpt
export function maxProductSubarray2(arr) {
  // due to how there is negative numbers that can either make big positive or big negative
  // got to keep track of both minimum and maximum products

  let curMax = arr[0];
  let curMin = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    const newMax = curMax * val;
    const newMin = curMin * val;

    curMax = Math.max(val, newMax, newMin);
    curMin = Math.min(val, newMax, newMin);

    max = Math.max(max, curMax);
  }
  return max;
}
