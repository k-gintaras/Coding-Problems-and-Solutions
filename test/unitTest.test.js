import assert from 'assert';

import { LinkedList } from '../my-solutions/unorganized/implementLinkedlist.js';

import {
  getAllArrays,
  getHardArrays,
  getEasyArrays,
  getTextArray,
  getSortedNumericArray,
  getNumericArray,
  getRandomArray,
} from '../testData.js';

import { isPalindrome } from '../my-solutions/unorganized/isPalindrome.js';
import { isPrime } from '../my-solutions/unorganized/isPrime.js';
import {
  twoLargest,
  twoLargestManual,
} from '../my-solutions/unorganized/twoLargest.js';

import { mostCommon } from '../my-solutions/unorganized/mostCommon.js';
import { reverseArray } from '../my-solutions/unorganized/reverseArray.js';
import { BinarySearchTree } from '../my-solutions/unorganized/binarySearchTree.js';
import { sortingAlgorithm } from '../my-solutions/unorganized/sortingAlgorithm.js';

import { isAnagram } from '../my-solutions/unorganized/isAnagram.js';
import { stringLength } from '../my-solutions/stringLength.js';
import { isEven } from '../my-solutions/unorganized/isEven.js';
import { sumArray } from '../my-solutions/unorganized/sumArray.js';
import { largestNumInBst } from '../my-solutions/unorganized/largestNumInBst.js';
import { smallestNumInBst } from '../my-solutions/unorganized/smallestNumInBst.js';
import { findDifference } from '../my-solutions/unorganized/findDifference.js';
import { Queue } from '../my-solutions/unorganized/queue.js';
// done
describe('implement queue', () => {
  it('we added 15 first and removed 15 first, FIFO', () => {
    const arr = [15, 47, 65, 4, 85, 70, 2, 59, 23, 54];

    const q = new Queue();

    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
      q.enqueue(n);
    }

    const res = q.dequeue();
    console.log(q.get()); // reversed array?
    assert.equal(res, 15);
  });
});

// // done
// describe('difference between max and min', () => {
//   it('should 83 true', () => {
//     const arr = [15, 47, 65, 4, 85, 70, 2, 59, 23, 54];
//     const res = findDifference(arr);
//     assert.equal(res, 83);
//   });
// });
// // done
// describe('lowest num in bst', () => {
//   it('should 1 true', () => {
//     const arr = [15, 47, 65, 4, 85, 70, 2, 59, 23, 54];
//     const bst = new BinarySearchTree();
//     bst.fill(arr);
//     bst.add(1);
//     console.log(JSON.stringify(bst.root, null, 4));
//     const res = smallestNumInBst(bst);
//     assert.equal(res, 1);
//   });
// });
// // done
// describe('largest num in bst', () => {
//   it('should 85 true', () => {
//     const arr = [15, 47, 65, 4, 85, 70, 2, 59, 23, 54];
//     const bst = new BinarySearchTree();
//     bst.fillUnbalanced(arr);
//     console.log(JSON.stringify(bst.root, null, 4));
//     const res = largestNumInBst(bst);
//     assert.equal(res, 85);
//   });
// });
// // done
// describe('sum array', () => {
//   it('should true', () => {
//     const a = [1, 2, 3];
//     const res = sumArray(a);

//     assert.equal(res, 6);
//   });
// });
// // done
// describe('is even', () => {
//   it('77 should false', () => {
//     const a = 77;
//     const res = isEven(a);

//     assert.equal(res, false);
//   });
//   it('88 should true', () => {
//     const a = 88;
//     const res = isEven(a);

//     assert.equal(res, true);
//   });
// });

// // done
// describe('string length', () => {
//   it('should 6', () => {
//     const a = 'listen';
//     const res = stringLength(a);

//     assert.equal(res, 6);
//   });
// });

// // done
// describe('is anagram', () => {
//   it('should true', () => {
//     const a = 'listen';
//     const b = 'silent';
//     const res = isAnagram(a, b);

//     assert.equal(res, true);
//   });
//   it('should false', () => {
//     const a = 'listenn';
//     const b = 'silent';
//     const res = isAnagram(a, b);

//     assert.equal(res, false);
//   });
// });

// // done
// describe('sorting algorithm', () => {
//   it('should', () => {
//     const test = getNumericArray().sort((a, b) => {
//       return a - b;
//     });
//     console.log(test);
//     const test2 = [2, 19, 37, 42, 54, 69, 71, 83, 92, 99];
//     const arr = [83, 42, 92, 19, 54, 69, 71, 37, 2, 99];
//     const res = sortingAlgorithm(arr);

//     console.log(res);
//     assert.deepEqual(res, test);
//   });
// });

// // done
// describe('binary search tree', () => {
//   it('should', () => {
//     const test = getNumericArray();
//     const res = new BinarySearchTree();
//     res.fill(test);

//     console.log(test);
//     console.log(res.get());
//     console.log(JSON.stringify(res.get(), null, 4));

//     // assert.equal(res, true);
//   });
// });

// // done
// describe('reverse array', () => {
//   it('should', () => {
//     const test = [1, 2, 3, 4];
//     const res = reverseArray(test);
//     const result = [4, 3, 2, 1];
//     assert.deepEqual(res, result);
//   });
//   it('should', () => {
//     const test = [1, 2, 3, 4, 4];
//     const res = reverseArray(test);
//     const result = [4, 4, 3, 2, 1];
//     assert.deepEqual(res, result);
//   });
// });

// // done
// describe('most common', () => {
//   it('should be equal', () => {
//     const test = [3, 2, 2, 2, 2, 3, 3, 3];
//     const res = mostCommon(test);
//     const result = 3; // or 2, we dunno
//     assert.equal(res, result);
//   });
//   it('should be equal', () => {
//     const test = [1, 2, 23, 1, 3, 1, 2, 1, 1, 3];
//     const res = mostCommon(test);
//     const result = 1;

//     assert.equal(res, result);
//   });
// });

// // done
// // we assume user does not intentionally enter troll array
// describe('get two largest elements in array', () => {
//   it('should be 99 and 88 true', () => {
//     const test = [1, 2, 7, 4, 1, 99, 5, 2, 88, 88];
//     const response = [99, 88];
//     const res = twoLargest(test);
//     assert.deepEqual(res, response);
//   });
//   it('should be 99 and 88 true again', () => {
//     const test = [1, 2, 7, 4, 1, 99, 5, 2, 99, 88];
//     const response = [99, 88];
//     const res = twoLargest(test);
//     assert.deepEqual(res, response);
//   });
//   // what if biggest numbers are the same, what then? we give them or we dont?
//   it('should probably be 1 and 1 or 1 and 0', () => {
//     const test = [1, 1, 1, 1, 1]; // i dunno rly what is the answer
//     const res = twoLargest(test);
//     const response = [1, 0];
//     assert.deepEqual(res, response);
//   });
//   it('should be 99 and 88 true', () => {
//     const test = [1, 2, 7, 4, 1, 99, 5, 2, 88, 88];
//     const response = [99, 88];
//     const res = twoLargestManual(test);
//     assert.deepEqual(res, response);
//   });
//   it('should be 99 and 88 true again', () => {
//     const test = [1, 2, 7, 4, 1, 99, 5, 2, 99, 88];
//     const response = [99, 88];
//     const res = twoLargestManual(test);
//     assert.deepEqual(res, response);
//   });
//   // what if biggest numbers are the same, what then? we give them or we dont?
//   it('should probably be 1 and 1 or 1 and 0', () => {
//     const test = [1, 1, 1, 1, 1]; // i dunno rly what is the answer
//     const res = twoLargestManual(test);
//     const response = [1, 0];
//     assert.deepEqual(res, response);
//   });
// });

// done passed
// describe('tests isPrime', () => {
//   it('should be same true', () => {
//     const test = 13;
//     const itIs = isPrime(test);
//     assert.equal(itIs, true);
//   });
//   it('should be false', () => {
//     const test = 12;
//     const itIs = isPrime(test);
//     assert.equal(itIs, false);
//   });
//   it('should be true', () => {
//     const test = 31;
//     const itIs = isPrime(test);
//     assert.equal(itIs, true);
//   });
//   // i did not expect this to be true at all, but it seems to be :D
//   it('should be true', () => {
//     const test = 1;
//     const itIs = isPrime(test);
//     assert.equal(itIs, true);
//   });
//   // i did not expect this to be true at all, but it seems to be :D
//   it('should be true', () => {
//     const test = 0;
//     const itIs = isPrime(test);
//     assert.equal(itIs, true);
//   });
// });

//done
// describe('tests isPalindrome', () => {
//   it('should be same true', () => {
//     const palindrome = 'racecar';
//     const itIs = isPalindrome(palindrome);
//     assert.equal(itIs, true);
//   });
//   it('should be false', () => {
//     const palindromeNot = 'racecara';
//     const itIs = isPalindrome(palindromeNot);
//     assert.equal(itIs, false);
//   });
// });

// this test is completed, we add .skip
// describe('makes a linked list 2', () => {
//   it('should be same arrays from test array and linked list', () => {
//     const list = new LinkedList();
//     // const arr = getEasyArrays()[0];
//     const arr = getHardArrays()[0];
//     for (let i = 0; i < arr.length; i++) {
//       const n = arr[i];
//       list.add(n);
//     }
//     const arr2 = list.get();
//     assert.deepEqual(arr, arr2);
//   });
//   it('should fill linked list', () => {
//     const list = new LinkedList();
//     const arr = getHardArrays()[0];
//     list.fill(arr);
//     const arr2 = list.get();
//     assert.deepEqual(arr, arr2);
//   });
// });
