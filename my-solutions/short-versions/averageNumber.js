function averageNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    sum += val;
  }
  return sum / arr.length;
}
