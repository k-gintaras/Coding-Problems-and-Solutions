// statement: implement a sorting algorithm
// description: A sorting algorithm is an algorithm that puts elements of a list in a certain order. The most-used orders are numerical order and lexicographical order.
// inputExample: [3, 2, 5, 1, 4]

// i guess i have to just pick simplest one and just do it
// just swap until sorted

// O(n^2) not very efficient
// turns out it is a bubble sort
export function sortingAlgorithm(arr) {
  let isThereSwaps = true;
  while (isThereSwaps) {
    isThereSwaps = false;

    for (let i = 0; i < arr.length - 1; i++) {
      const n = arr[i];
      const next = arr[i + 1];
      if (n > next) {
        isThereSwaps = true;
        arr[i] = next;
        arr[i + 1] = n;
      }
    }
  }
  return arr;
}
