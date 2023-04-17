//mostFrequentElement
// statement: find the most frequent element in an array
// description: This problem requires you to find the element that appears most often in an array of elements.
// inputExample: [1, 2, 3, 4, 4, 4, 5]

const testInput = [1, 2, 3, 4, 4, 4, 5];
const testInputs = [
  ['a', 'a', 'b', 'b', 'b', 'b', 'c', 'c', 'b', 'a', 'a'],
  [1, 2, 3, 4, 4, 4, 5],
];
testAll();

// thought process..
// count frequencies of each item
// select one with highest frequency
// possible to do it hard way with mapping each unique value and frequency
// then selecting highest frequency
// we can instead just store current highest frequency value
// but what if that value later becomes more frequent and we stopped counting it?
// we dont want to recount the same item again, so we have to have list of uniques
// get a SET of a list
// for each item in set, count how many times that item happens
// can store that in separate count array the same size of a set
// we then iterate list looking for biggest value found yet and remember the index
// the correct index of set will be the most frequent item
// but sets are not indexed?
// lets start over
// uniqueValue:count, we need to count and then sort by count
// use hashmap and keep latest highest pair saved
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

function test() {
  console.log(mostFrequentElement(testInput));
}

function testAll() {
  for (let i = 0; i < testInputs.length; i++) {
    const testInput = testInputs[i];
    console.log(mostFrequentElement(testInput));
  }
}
