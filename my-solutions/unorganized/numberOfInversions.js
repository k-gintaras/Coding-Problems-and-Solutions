//     statement: Find the number of inversions in an array
//     description: Inversion of an array is defined as a pair of indices (i, j) such that i < j and arr[i] > arr[j]
//  The number of inversions in an array is the total number of such pairs in the array
//     inputExample: [2, 4, 1, 3, 5]

// for some reason it is still brute force even when j=i+1
export function numberOfInversionsBruteForce(arr) {
  let inversions = 0;
  for (let i = 0; i < arr.length; i++) {
    const firstDigit = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const secondDigit = arr[j];
      if (firstDigit > secondDigit) {
        inversions++;
      }
    }
  }
  return inversions;
}

// attempt one that is not brute force, it is missing 1 count for some reason
// after quite few youtube videos, im doing 1 more
export function numberOfInversionsAttemptOne(arr) {
  return inversions(arr);
}

export function inversions(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return (
    inversions(left) + inversions(right) + inversionsInBetween(left, right)
  );
}

function inversionsInBetween(left, right) {
  let i = 0,
    j = 0,
    inversions = 0;
  while (i < left.length && j < right.length) {
    const notInversion = left[i] <= right[j]; // opposite of [i]>[j] inversion
    if (notInversion) {
      i++; // go next of the left
    } else {
      inversions++;
      j++; // inversion found, check next right
    }
  }

  // gpt
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
      count += left.length - i;
    }
  }
  return inversions;
}

export function numberOfInversions(arr) {
  // it has 3 parts, initiate
  // divide to left and right // sort and count // so it is easier to count
  // merge and count // to include in between left and right

  // left and right pointers to cut array each recursion
  const [sorted, count] = divideAndSort(arr, 0, arr.length - 1); // last pointer, not array length that would be out of bounds
  console.log(sorted);
  return count;
}

// we return sorted array and count of the inversions
// need sorted array as return, to make it easier to count inversions later
function divideAndSort(arr, l, r) {
  // this is recursive, so exit condition is needed
  if (l >= r) {
    // l will be guaranteed to not be > but the check is anyway
    // this means array is just the size 1
    return [[arr[l]], 0]; // size 1 has no inversions // it also has to be an array [[]]
  }
  // we divide and conquer, so we need mid point.
  // mid point of integer is Math.floor
  // we divide by using each new recursion using provided l and r
  const mid = Math.floor((l + r) / 2);
  const [left, leftInversions] = divideAndSort(arr, l, mid); // current zoom in of a half to mid
  const [right, rightInversions] = divideAndSort(arr, mid + 1, r); // from half not including already taken on left
  const [merged, mergedInversions] = mergeAndCount(left, right); // to count whatever in between each left and right
  // after divideAnd sort return left and right, they will be passed as sorted into merge
  // we return merged sorted array and inversion total count
  return [merged, leftInversions + rightInversions + mergedInversions];
}

function mergeAndCount(left, right) {
  // we iterate both arrays somewhat separately
  // but once we find inversion we move next pointer
  // we make new array that rearranges stuff to be sorted
  // not all of items will go into that array, we will have to add left overs
  // because we might reach i or j faster and exit loop earlier

  let i = 0,
    j = 0,
    inversions = 0,
    sorted = [];

  while (i < left.length && j < right.length) {
    // we iterate both, one might reach faster
    const isInversion = left[i] > right[j]; // [i]>[j] i<j
    if (!isInversion) {
      // not inversion, [i] is smaller
      sorted.push(left[i]);
      i++;
    } else {
      inversions += left.length - i; // because it is sorted, instead of reiterating again for each j, we assume all items before are also counted
      // on inversion j is smaller, so we add it first
      sorted.push(right[j]);
      j++;
    }
  }

  // because i is iterator specially iterated for left
  // because j is iterator specially iterated for right
  const leftoverLeft = left.slice(i); // from i to end, whatever i we reached
  const leftoverRight = right.slice(j); // from j to end, whatever j we reached
  const merged = sorted.concat(leftoverLeft).concat(leftoverRight); // join all the arrays
  return [merged, inversions];
}
