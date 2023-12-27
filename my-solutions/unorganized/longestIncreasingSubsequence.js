//     statement: find the length of the longest increasing subsequence
//     description: The longest increasing subsequence problem is the
//     problem of finding a subsequence of a given sequence in which the subsequence's
//     elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible
//     inputExample: [10, 22, 9, 33, 21, 50, 41, 60, 80]

// efficient OnLogn, because it uses binary search inside one for loop
function binarySearch(tail, val) {
  let low = 0,
    high = tail.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (tail[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

export function longestNonDecreasingSubsequence(arr) {
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

// standard way (O n^2), slow ish
export function longestIncreasingSubsequence(arr) {
  if (!arr) return 0;
  if (arr.length === 1) return 1;
  // assume arr is numbers

  const n = arr.length;
  const lis = new Array(n).fill(1); // 1 digit is subsequence of length 1 base case
  for (let i = 1; i < n; i++) {
    // we start at [j][i][][] ->>> [j][j][i][] and repeat j inside i range
    for (let j = 0; j < i; j++) {
      // because j is behind i always, j = start i = end
      if (arr[i] > arr[j]) {
        // end is still bigger, so it is still increasing
        let previous = lis[j]; // one of the behind of the each j within i
        previous += 1; // because we would be comparing it if we "added new number, would it be bigger"
        const current = lis[i]; // on first iteration it's just one, but later might become bigger
        // we dont add another + because we check if we added to previous, and if current is bigger
        // current is already incremented from before, or it will be incremented later
        lis[i] = Math.max(previous, current); // since we add 1 more number
      }
      // no else unlike many DP problems
    }
  }

  // not last item unlike many DP problems, because any subsequence might be the biggest inside lis
  return Math.max(...lis); // js is awesome, we deconstruct array into just parameters
}
