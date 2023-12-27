// minDeleteToSorted
//     statement: find the minimum number of elements to delete from an array to make it sorted
//     description: Given an array of integers, find the minimum number of elements to delete from the array in order to make the array sorted in ascending order
//
//     inputExample: [5, 3, 1, 2, 4]
// onlogn, using binary search
function binarySearch(tail, val) {
  let low = 0,
    high = tail.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (tail[mid] <= val) {
      // allow same values
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

function longestNonDecreasingSubsequence(arr) {
  const tail = [];
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const pos = binarySearch(tail, val);
    if (tail.length === pos) {
      tail.push(val); // it is just larger than all elements, we add
    } else {
      tail[pos] = val; // the length is longer so we sure pos will fit and it replaces the element
    }
  }
  return tail.length;
}

export function minDeleteToSorted(arr) {
  if (arr.length < 3) return 0; // with 2 or less elements its either asc or desc anyway with no replace
  const n = arr.length;
  const asc = longestNonDecreasingSubsequence(arr);
  const desc = longestNonDecreasingSubsequence([...arr].reverse()); // just backwards is same

  return n - Math.max(asc, desc); // simply the rest of array values are ones we did not include and to be deleted
}

export function minDeleteToSorted2(arr) {
  // just calc longest increasing subsequence and longest decreasing subsequence in one with 2 for loops

  const n = arr.length;
  if (n < 3) return 0; // nothing to delete its either asc or desc of length 2 or just zero length
  const lisAsc = new Array(n).fill(1); // length 1 is shortest increasing or decreasing subsequence
  const lisDesc = new Array(n).fill(1); // length 1 is shortest increasing or decreasing subsequence

  for (let i = 1; i < n; i++) {
    // we already have 1 default value
    for (let j = 0; j < i; j++) {
      // j always lag behind i and be first element
      const valueAhead = arr[i];
      const valueBehind = arr[j];
      if (valueAhead > valueBehind) {
        // increasing
        lisAsc[i] = Math.max(lisAsc[i], lisAsc[j] + 1); // previous iterations of j's inside i or current j+1
      } else {
        // decreasing
        lisDesc[i] = Math.max(lisDesc[i], lisDesc[j] + 1); // previous iterations of j's inside i or current j+1
      }
    }
  }
  const maxAsc = Math.max(...lisAsc);
  const maxDesc = Math.max(...lisDesc);
  return Math.min(n - maxAsc, n - maxDesc); // min, we want the opposite.. because opposite of max len is the "deleted"
}

// find the minimum number of elements to delete from an array to make it sorted
export function minDeleteToSorted1(arr) {
  // longest increasing or decreasing subsequence or something along the lines
  // delete same as just ignore it
  // number of elements to delete, same as arr.len- onlySorted.length
  // but we will likely have just counts of lengths of "considered sorted"
  // it might be asc or desc
  const n = arr.length;
  if (n < 3) return 0; // either empty or simply 2 digits either asc or desc
  const maxLengthAsc = new Array(n).fill(0);
  const maxLengthDesc = new Array(n).fill(0);
  maxLengthAsc[0] = 1;
  maxLengthDesc[0] = 1;
  let longestSorted = 0;
  let previousValue = arr[0];
  for (let i = 1; i < n; i++) {
    const val = arr[i];
    if (previousValue <= val) {
      maxLengthAsc[i] = Math.max(maxLengthAsc[i], maxLengthAsc[i] + 1);
    }
    if (previousValue >= val) {
      maxLengthDesc[i] = Math.max(maxLengthDesc[i], maxLengthDesc[i] + 1);
    }
    previousValue = val;
    longestSorted = Math.max(longestSorted, maxLengthAsc[i], maxLengthDesc[i]);
  }
  return arr.length - longestSorted;
}
