import { LinkedList } from '../my-solutions/unorganized/implementLinkedlist.js';
import assert from 'assert';

import {
  getAllArrays,
  getHardArrays,
  getEasyArrays,
  getTextArray,
  getSortedNumericArray,
  getNumericArray,
  getRandomArray,
} from '../testData.js';

describe('makes a linked list 2', () => {
  it('should be same arrays from test array and linked list', () => {
    const list = new LinkedList();
    // const arr = getEasyArrays()[0];
    const arr = getHardArrays()[0];
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
      list.add(n);
    }
    const arr2 = list.get();
    assert.deepEqual(arr, arr2);
  });
  it('should fill linked list', () => {
    const list = new LinkedList();
    const arr = getHardArrays()[0];
    list.fill(arr);
    const arr2 = list.get();
    assert.deepEqual(arr, arr2);
  });
});
