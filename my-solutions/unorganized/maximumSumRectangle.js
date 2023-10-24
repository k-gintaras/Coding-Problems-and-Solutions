// maximumSumRectangle;
//     statement: find the maximum sum rectangle in a 2d matrix
//     description: Given a 2D matrix of integers, find the maximum sum rectangle in the matrix
//  A rectangle is defined by its top left corner and bottom right corner
//
//     inputExample: [[1, 2, -1, -4, -20], [-8, -3, 4, 2, 1], [3, 8, 10, 1, 3], [-4, -1, 1, 7, -6]]

export function maximumSumRectangle(matrix) {
  // store left right top bottom (found matrix coordinates)
  // iterate left, right
  // calculate kadane i,j
  // move j calc kadane for each row till end
  // move i repeat but j>=i because no negative index, we cant have backwards mini matrix
  // -ij---   -i---j-   ---i--j
  let left = 0,
    right = 0,
    top = 0,
    bottom = 0;

  let temporarySums = new Array(matrix.length).fill(0);
  let currentMax = -Infinity;

  // we iterate columns
  for (let l = 0; l < matrix[0].length; l++) {
    // we dont check any behind as that would not be a rectangle anymore
    for (let r = l; r < matrix[0].length; r++) {
      // on new round we reset sums array
      temporarySums = new Array(matrix.length).fill(0);
      // iterate rows to find max sum subarray indices
      for (let i = 0; i < matrix.length; i++) {
        temporarySums[i] = getSum(matrix[i].slice(l, r + 1));
      }
      // we then get kadane on our sums
      const { max, start, end } = kadaneSumData(temporarySums);
      if (max > currentMax) {
        currentMax = max;
        left = l;
        right = r;
        top = start;
        bottom = end;
      }
      // what we get here is top and bottom
    }
  }
  return getSubmatrix(matrix, left, top, right, bottom);
}

function getSum(arr) {
  // reduce basically lets you have a value into which you reduce and each item
  return arr.reduce((acc, val) => acc + val, 0);
}

function getSubmatrix(matrix, left, top, right, bottom) {
  const subMatrix = [];
  for (let i = top; i <= bottom; i++) {
    subMatrix.push(matrix[i].slice(left, right + 1));
  }
  return subMatrix;
}

// just give max sum and not an array
function kadaneSumData(arr) {
  if (!arr) return Infinity * -1;

  //  to store each max on each stage, probably for next version of array
  const sum = new Array(arr.length);
  sum[0] = arr[0]; // so far our max sum is just first value by default
  let max = arr[0]; //just to hold max and return it, we keep a rray for later reuse, we are not sure why...
  let start = 0;
  let end = 0;
  //already loaded first value and want to use previous i-1
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const previous = sum[i - 1];
    const newSum = current + previous;
    sum[i] = Math.max(current, newSum); // max of just itself or itself with whatever we max found so far
    if (current > newSum) {
      // here we basically start new subarray, here we set the new start point
      start = i;
    }
    // found larger max
    // fond new ending index for sub array
    if (sum[i] > max) {
      max = sum[i];
      end = i;
    }
  }
  return { max, start, end };
}

// just give max sum and not an array
function kadaneSum(arr) {
  if (arr?.length < 1) return Infinity * -1;
  let previous = arr[0];
  let max = arr[0]; // base case
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const candidateSum = current + previous;
    previous = Math.max(current, candidateSum); // max of just itself or itself with whatever we max found so far
    // found larger max
    if (previous > max) {
      max = previous;
    }
  }
  return max;
}

// just give max sum and not an array
function kadaneSumSubArray(arr) {
  if (!arr) return Infinity * -1;

  //  to store each max on each stage, probably for next version of array
  const sum = new Array(arr.length);
  sum[0] = arr[0]; // so far our max sum is just first value by default
  let max = arr[0]; //just to hold max and return it, we keep a rray for later reuse, we are not sure why...
  let start = 0;
  let end = 0;
  //already loaded first value and want to use previous i-1
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const previous = sum[i - 1];
    const newSum = current + previous;
    sum[i] = Math.max(current, newSum); // max of just itself or itself with whatever we max found so far
    if (current > newSum) {
      // here we basically start new subarray, here we set the new start point
      start = i;
    }
    // found larger max
    // fond new ending index for sub array
    if (sum[i] > max) {
      max = sum[i];
      end = i;
    }
  }
  return arr.slice(start, end + 1);
}

// just give max sum and not an array
function kadaneSumSubArrayIndex(arr) {
  if (!arr) return Infinity * -1;

  //  to store each max on each stage, probably for next version of array
  const sum = new Array(arr.length);
  sum[0] = arr[0]; // so far our max sum is just first value by default
  let max = arr[0]; //just to hold max and return it, we keep a rray for later reuse, we are not sure why...
  let start = 0;
  let end = 0;
  //already loaded first value and want to use previous i-1
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const previous = sum[i - 1];
    const newSum = current + previous;
    sum[i] = Math.max(current, newSum); // max of just itself or itself with whatever we max found so far
    if (current > newSum) {
      // here we basically start new subarray, here we set the new start point
      start = i;
    }
    // found larger max
    // fond new ending index for sub array
    if (sum[i] > max) {
      max = sum[i];
      end = i;
    }
  }
  return [start, end];
}

// just give max sum and not an array
function kadaneSumData(arr) {
  if (!arr) return Infinity * -1;

  //  to store each max on each stage, probably for next version of array
  const sum = new Array(arr.length);
  sum[0] = arr[0]; // so far our max sum is just first value by default
  let max = arr[0]; //just to hold max and return it, we keep a rray for later reuse, we are not sure why...
  let start = 0;
  let end = 0;
  //already loaded first value and want to use previous i-1
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const previous = sum[i - 1];
    const newSum = current + previous;
    sum[i] = Math.max(current, newSum); // max of just itself or itself with whatever we max found so far
    if (current > newSum) {
      // here we basically start new subarray, here we set the new start point
      start = i;
    }
    // found larger max
    // fond new ending index for sub array
    if (sum[i] > max) {
      max = sum[i];
      end = i;
    }
  }
  return { max, start, end };
}
