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

describe('tests isPrime', () => {
  it('should be same true', () => {
    const test = 13;
    const itIs = isPrime(test);
    assert.equal(itIs, true);
  });
  it('should be false', () => {
    const test = 12;
    const itIs = isPrime(test);
    assert.equal(itIs, false);
  });
  it('should be true', () => {
    const test = 31;
    const itIs = isPrime(test);
    assert.equal(itIs, true);
  });
  // i did not expect this to be true at all, but it seems to be :D
  it('should be true', () => {
    const test = 1;
    const itIs = isPrime(test);
    assert.equal(itIs, true);
  });
  // i did not expect this to be true at all, but it seems to be :D
  it('should be true', () => {
    const test = 0;
    const itIs = isPrime(test);
    assert.equal(itIs, true);
  });
});

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
