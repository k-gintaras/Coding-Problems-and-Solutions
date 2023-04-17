function findMostFrequentItem(arr) {
  let frequency = {};
  let maxFrequency = 0;
  for (let item of arr) {
    frequency[item] = frequency[item] || 0;
    frequency[item]++;
    if (frequency[item] > maxFrequency) {
      maxFrequency = frequency[item];
      mostFrequentElement = item;
    }
  }
  return mostFrequentElement;
}

// Example usage:
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; // 4 is the most frequent item
const mostFrequent = findMostFrequentItem(arr);
console.log(mostFrequent); // Output: 4
