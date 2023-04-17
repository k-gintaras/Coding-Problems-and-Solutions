import { Linkedlist } from '../my-solutions/unorganized/implementLinkedList.js';
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

describe('makes a linked list', () => {
  it('should be same arrays from test array and linked list', () => {
    const list = new Linkedlist();
    const arr = getEasyArrays()[0];
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
      list.add(n);
    }
    const arr2 = list.get();
    assert.deepEqual(arr, arr2);
  });
});
