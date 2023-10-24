// note that i already "solved it" with some guidance in maximumSumRectangle.js
// but we gonna do it anyway again
// just to memorize and practice our memory, critical thinking skills, given that
// if i dont remember, i can think it out again, at least some of the parts
// this is also important because it uses famous algorithm worth remembering
// Kadane, where you basically iterate once but by using math+ tricks, find i j by just doing i

// maximumSumSubmatrix;

export function maximumSumSubmatrix(matrix) {
  // need coordinates
  let top = 0,
    left = 0,
    bottom = 0,
    right = 0;
  // need temporary array for kadane
  let tempSums = new Array(matrix.length).fill(0); // each row sums we check max with kadane
  let bestMax = -Infinity;
  // iterate columns (matrix[0].length) left and right l,r
  // iterate first pointer l
  for (let l = 0; l < matrix[0].length; l++) {
    // iterate second pointer r
    for (let r = l; r < matrix[0].length; r++) {
      // no backwards checking, start from previous pointer
      // iterate rows (matrix.length) to create mini arrays
      // then to sum them and add to temporary sums
      // to calculate kadane
      // we also reset temporary sums
      tempSums = new Array(matrix.length).fill(0);
      for (let i = 0; i < matrix.length; i++) {
        // either sum generated l and r columns or just make array and then sum it
        const subArray = matrix[i].slice(l, r + 1); // second pointer is not included in slice, but we need it

        const sum = subArray.reduce((all, current) => all + current, 0);

        tempSums[i] = sum;
      }
      // calculate kadane for fresh sums
      const { max, start, end } = getKadane(tempSums);

      // if this new max is larger than one found, update coordinates
      // am i supposed to save tempMax or what?
      if (max > bestMax) {
        bestMax = max;
        top = start;
        bottom = end;
        left = l;
        right = r;
      }
    }
  }

  // return the matrix or whatever agreed
  return getSubMatrix(matrix, left, right, top, bottom);
}

function getSubMatrix(matrix, l, r, t, b) {
  const newMatrix = [];

  // start top, end bottom inclusive
  for (let i = t; i <= b; i++) {
    const row = matrix[i].slice(l, r + 1); // second pointer inclusive, slice doesnt, so +1
    newMatrix.push(row);
  }
  return newMatrix;
}

function getKadane(arr) {
  let start = 0,
    end = 0; // pointers
  let max = arr[0]; // just base case
  // to make things simple, just use array to store previous values
  let sums = new Array(arr.length);
  sums[0] = arr[0]; // base case

  // if current value found is larger than previous then we update start
  // if new max found then we update end
  for (let i = 1; i < arr.length; i++) {
    // start at 1, because sums[0] already set
    const currentValue = arr[i];
    const newSum = sums[i - 1] + currentValue; // new potential sum or current item, negative values could make current item bigger
    const newMax = Math.max(newSum, currentValue);
    sums[i] = newMax;
    // new bigger sum, new start pointer
    if (newSum < currentValue) {
      start = i;
    }
    // new max, and new end pointer
    if (newMax > max) {
      max = newMax;
      end = i;
    }
  }
  return { max, start, end };
}
