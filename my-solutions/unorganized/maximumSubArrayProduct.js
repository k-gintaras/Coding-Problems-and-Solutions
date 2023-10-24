//     statement: find the maximum product of a subarray
//     description: Given an array of integers, find the maximum product of a subarray of size k
//     inputExample: [1, 2, 3, 4, 5]

export function maximumSubArrayProduct(arr) {
  let minProduct = 1; // it will probably be negative and it might become very big if 2 negatives
  let maxProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    // zero will bake it all 0
    if (n !== 0) {
      const max = maxProduct * n;
      const min = minProduct * n;
      // because all previous could be lower than current
      // 1, -1, 1, 2, n=9, we also consider it
      // because we just want max of all them 3, we just Math.max
      // this is a bit tidier than having multiple if chains
      maxProduct = Math.max(max, min, n);
      minProduct = Math.min(max, min, n);
    } else {
      // we dont want to skip, because if we do  a,b,c,0,d,e
      // we dont have subarray, we have subsequence,
      // so we reset but not from 0, because x*0=0
      maxProduct = 1;
      minProduct = 1;
    }
  }
  return maxProduct;
}
export function maximumSubArrayProductFirstTry(arr) {
  let minProduct = 1; // it will probably be negative and it might become very big if 2 negatives
  let maxProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    // zero will bake it all 0
    if (n !== 0) {
      const max = maxProduct * n;
      const min = minProduct * n;
      // if bigger gets bigger
      if (maxProduct < max) {
        //maxProduct = max;
      } else if (minProduct > min) {
        // smaller gets smaller
        minProduct = min;
      } else if (min > max) maxProduct = min;
    }
  }
  return maxProduct;
}
