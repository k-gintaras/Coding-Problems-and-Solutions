// maximumSumTwoChanged
//     statement: Find the maximum sum of a subarray with at most two elements changed,  where you are allowed to increase the value of at most two elements by up to 5 each
//     description: Given an array of integers, find the maximum sum of a subarray with at most two elements changed
//     inputExample: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// one last try: using modified kadane with GPT help. there was 3 versions, i dunno which one is right, can't even test it
export function maximumSumTwoChanged(arr) {
  // store max, arr length, and 3 dynamic programming style arrays to track max
  // track sumNoChanges, sumOneChange, sumTwoChanges
  // test for bad cases
  const n = arr.length;
  const change = 5;
  let maxSum = 0;
  if (n === 0) return 0; // no max sum i guess
  if (n < 2) return arr[0] + change; // just make one change

  // create arrays and fill them dynamic programming style
  // doesnt produce expected results... we just try simplified
  let sumNoChanges = 0;
  let sumOneChange = 0;
  let sumTwoChanges = 0;
  // const sumNoChanges = new Array(n).fill(0);
  // const sumOneChange = new Array(n).fill(0);
  // const sumTwoChanges = new Array(n).fill(0);

  // initialize first values so we can check previous dynamic programming style
  // sumNoChanges[0] = arr[0];
  // sumOneChange[0] = arr[0] + change; // one change
  // sumTwoChanges[0] = arr[0] + change; // two changes but only one possible

  for (let i = 0; i < n; i++) {
    // start 1 because it is already set
    sumNoChanges = Math.max(sumNoChanges + arr[i], arr[i]); // previous or new
    sumOneChange = Math.max(sumOneChange + arr[i], sumNoChanges + change); // previous change or new change
    sumTwoChanges = Math.max(sumTwoChanges + arr[i], sumOneChange + change); // previous change or new change with one change

    maxSum = Math.max(maxSum, sumNoChanges, sumOneChange, sumTwoChanges); // max of all is max sum
  }
  return maxSum;
}

// memorized and understood from gpt, but written from memory and how i understood

export function maximumSumTwoChanged4(arr) {
  let maxSum = 0;
  let currentSum = 0;
  let maxSumWithOneChange = 0;
  let maxSumWithTwoChanges = 0;
  const change = 5;

  for (let num of arr) {
    // Update current sum, considering the maximum subarray ending at the current element
    currentSum = Math.max(num, currentSum + num);

    // Update the sum with one change, either by changing the current number or extending the previous change
    maxSumWithOneChange = Math.max(maxSumWithOneChange + num, currentSum + change);

    // Update the sum with two changes, similarly
    maxSumWithTwoChanges = Math.max(maxSumWithTwoChanges + num, maxSumWithOneChange + change);

    // Update the global maximum sum
    maxSum = Math.max(maxSum, currentSum, maxSumWithOneChange, maxSumWithTwoChanges);
  }

  return maxSum;
}
export function maximumSumTwoChanged3(arr) {
  // one pass
  // use 3 arrays, noChange, oneChange, twoChanges
  // use max to find max from all 3
  // use change constant to simply follow the requirement of "what to change and how much"
  const change = 5; // we for now assume that this is our allowed change, an increase by 5;
  const n = arr.length;
  if (n === 0) return 0;
  if (n === 1) return arr[0];
  let maxSum = arr[0];
  // dynamic programming, make 1 item longer to check previous
  // and fill it up with default
  const noChangeMaxSum = new Array(n).fill(0);
  const oneChangeMaxSum = new Array(n).fill(0);
  const twoChangesMaxSum = new Array(n).fill(0);

  // set first values to allow checking previous and comparing
  // max would be just any value from array, i.e. first one
  noChangeMaxSum[0] = arr[0];
  oneChangeMaxSum[0] = arr[0] + change;
  twoChangesMaxSum[0] = arr[0] + change;

  // one pass check all
  // start at 1 to allow check previous i-1 and because 0 is already set
  for (let i = 1; i < n; i++) {
    // no changes
    const previousNoChange = noChangeMaxSum[i - 1] + arr[i];
    const currentNoChange = arr[i];
    noChangeMaxSum[i] = Math.max(previousNoChange, currentNoChange);

    // one change base
    const previousOneChange = oneChangeMaxSum[i - 1] + arr[i];
    const currentOneChange = noChangeMaxSum[i - 1] + arr[i] + change;
    oneChangeMaxSum[i] = Math.max(previousOneChange, currentOneChange);

    // one change best case
    // let maxWithOneChange = oneChangeMaxSum[i];
    // for (let j = 0; j < i; j++) {
    //   maxWithOneChange = Math.max(maxWithOneChange, noChangeMaxSum[j] + (arr[i] + change));
    // }
    // oneChangeMaxSum[i] = maxWithOneChange;

    // two changes base
    const previousTwoChange = twoChangesMaxSum[i - 1] + arr[i];
    const currentTwoChange = oneChangeMaxSum[i - 1] + arr[i] + change;
    twoChangesMaxSum[i] = Math.max(previousTwoChange, currentTwoChange);

    // two changes best case
    // let maxWithTwoChanges = twoChangesMaxSum[i];
    // for (let j = 0; j < i; j++) {
    //   maxWithTwoChanges = Math.max(maxWithTwoChanges, oneChangeMaxSum[j] + (arr[i] + change));
    // }
    // twoChangesMaxSum[i] = maxWithTwoChanges;

    maxSum = Math.max(maxSum, noChangeMaxSum[i], oneChangeMaxSum[i], twoChangesMaxSum[i]);
  }

  return maxSum;
}

// with gpt assistance semi solo
function maximumSumTwoChanged2(arr) {
  const change = 5;
  let n = arr.length;
  let noChange = new Array(n);
  let oneChange = new Array(n);
  let twoChange = new Array(n);

  // Initialize base cases
  noChange[0] = arr[0];
  oneChange[0] = arr[0];
  twoChange[0] = arr[0];

  let maxSum = arr[0];

  for (let i = 1; i < n; i++) {
    noChange[i] = Math.max(noChange[i - 1] + arr[i], arr[i]);
    oneChange[i] = Math.max(oneChange[i - 1] + arr[i], oneChange[i - 1] + arr[i] + change);
    twoChange[i] = Math.max(twoChange[i - 1] + arr[i], oneChange[i - 1] + arr[i] + change, oneChange[i] + arr[i] + change);

    // Update maxSum
    maxSum = Math.max(maxSum, noChange[i], oneChange[i], twoChange[i]);
  }

  return maxSum;
}

// semi solo attempt 1
export function maximumSumTwoChanged1(arr) {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let curSum = 0;
    let firstBestIncrease = 0;
    let secondBestIncrease = 0;
    for (let j = i; j < arr.length; j++) {
      curSum += arr[j];

      // one change
      // two changes
      let sumWithBestIncreases = curSum + firstBestIncrease + secondBestIncrease;

      maxSum = Math.max(maxSum, sumWithBestIncreases);
    }
  }
}
