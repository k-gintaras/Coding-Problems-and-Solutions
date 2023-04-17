// statement: find the average of a set of numbers
// description: The average of a set of numbers is a measure of the central tendency of the data set. It is calculated by taking the sum of all the numbers in the set and dividing it by the number of values in the set.
// inputExample: [1, 2, 3, 4, 5]

// just as math lessons taugh
// sum all, divide by count

function averageNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    sum += val;
  }
  return sum / arr.length;
}

test();
function test() {
  console.log(averageNumber([1, 2, 3, 4, 5]));
}
