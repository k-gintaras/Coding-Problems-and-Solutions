function mostFrequentElement(input) {
  const hashMap = {};

  // instead of making new array from hashmap pairs and then sorting it
  // we just need to update latest largest one
  let largest = { element: '', frequency: 0 };
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if (hashMap[element]) {
      // already exists, we count +1
      hashMap[element]++;
      const highestCur = hashMap[element];
      // current frequency larger than last one, we update
      if (highestCur > largest.frequency) {
        largest.element = element;
        largest.frequency = highestCur;
      }
    } else {
      // just found new unique
      hashMap[element] = 1;
      if (!largest) {
        largest.element = element;
        largest.frequency = 1;
      }
    }
  }

  return largest;
}
