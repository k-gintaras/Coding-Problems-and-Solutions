function averageArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const avg = averageArray(arr);
console.log(avg); // Output: 3
