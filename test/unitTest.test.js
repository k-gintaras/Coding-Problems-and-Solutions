import assert from 'assert';
import { expect } from 'chai';

import { LinkedList } from '../my-solutions/unorganized/implementLinkedlist.js';

import {
  getAllArrays,
  getHardArrays,
  getEasyArrays,
  getTextArray,
  getSortedNumericArray,
  getNumericArray,
  getRandomArray,
  getBalancedTrees,
  getUnbalancedTrees,
  getUnweightedGraphs,
} from '../testData.js';

import { isPalindrome } from '../my-solutions/unorganized/isPalindrome.js';
import { isPrime } from '../my-solutions/unorganized/isPrime.js';
import { twoLargest, twoLargestManual } from '../my-solutions/unorganized/twoLargest.js';

import { mostCommon } from '../my-solutions/unorganized/mostCommon.js';
import { reverseArray } from '../my-solutions/unorganized/reverseArray.js';
import { BinarySearchTree } from '../my-solutions/unorganized/binarySearchTree.js';
import { sortingAlgorithm } from '../my-solutions/unorganized/sortingAlgorithm.js';
import { isAnagram } from '../my-solutions/unorganized/isAnagram.js';
import { stringLength } from '../my-solutions/unorganized/stringLength.js';
import { isEven } from '../my-solutions/unorganized/isEven.js';
import { sumArray } from '../my-solutions/unorganized/sumArray.js';
import { largestNumInBst } from '../my-solutions/unorganized/largestNumInBst.js';
import { smallestNumInBst } from '../my-solutions/unorganized/smallestNumInBst.js';
import { findDifference } from '../my-solutions/unorganized/findDifference.js';
import { Queue } from '../my-solutions/unorganized/queue.js';
import { findCommonInTwo } from '../my-solutions/unorganized/findCommonInTwo.js';
import { findMiddleInLinked } from '../my-solutions/unorganized/findMiddleInLinked.js';
import { findNthInLinked } from '../my-solutions/unorganized/findNthInLinked.js';

import { linkedListSize } from '../my-solutions/unorganized/linkedListSize.js';

import { linkedListHasCycle } from '../my-solutions/unorganized/linkedListHasCycle.js';
import { LinkedListWithLoop } from '../my-solutions/unorganized/linkedListWithLoop.js';

import { twoLinkedIntersection } from '../my-solutions/unorganized/twoLinkedIntersection.js';

import { isBinaryTreeBalanced } from '../my-solutions/unorganized/isBinaryTreeBalanced.js';
import { isBalanced } from '../my-solutions/unorganized/isBinaryTreeBalanced-practice.js';

import { maxDepthBinaryTree } from '../my-solutions/unorganized/maxDepthBinaryTree.js';

import { traverseInPreorder } from '../my-solutions/unorganized/traverseInPreorder.js';

import { traverseInPostorder } from '../my-solutions/unorganized/traverseInPostorder.js';
import { traverseInOrder } from '../my-solutions/unorganized/traverseInOrder.js';

import { lowestCommonAncestor } from '../my-solutions/unorganized/lowestCommonAncestor.js';

import { isStringNumber, isStringInteger, isStringFloat, isStringHexadecimal } from '../my-solutions/unorganized/isStringNumber.js';

import { HashTable } from '../my-solutions/unorganized/hashTable.js';

import { longestNonRepeatingString } from '../my-solutions/unorganized/longestNonRepeatingString.js';

import { largestConsecutiveSum } from '../my-solutions/unorganized/largestConsecutiveSum.js';

import { lengthOfLcs, longestCommonSubsequence, findLargestCommonSubsequence } from '../my-solutions/unorganized/longestCommonSubsequence.js';

import { waysToGiveChange, countWaysToGive, countWaysToGiveCoin } from '../my-solutions/unorganized/waysToGiveChange.js';

import { waysToUseGivenBrackets, catalanBracketCount } from '../my-solutions/unorganized/waysToUseGivenBrackets.js';

import { waysToTraverseMatrix } from '../my-solutions/unorganized/waysToTraverseMatrix.js';

import { countIslands } from '../my-solutions/unorganized/countIslands.js';

import { countConnectedNodes } from '../my-solutions/unorganized/countConnectedNodes.js';
import { getGraphs, getGraphAns } from '../testData.js';

import { shortestUnweightedPath } from '../my-solutions/unorganized/shortestUnweightedPath.js';

import { binaryTreeDiameter1, binaryTreeDiameter2, binaryTreeDiameter3 } from '../my-solutions/unorganized/binaryTreeDiameter.js';

import { rectangleOverlap } from '../my-solutions/unorganized/rectangleOverlap.js';
import { rectangles } from '../testData.js';

import { numberOfSumPairs } from '../my-solutions/unorganized/numberOfSumPairs.js';

import { numberOfDifPairs } from '../my-solutions/unorganized/numberOfDifPairs.js';

import { longestIncreasingSubsequence } from '../my-solutions/unorganized/longestIncreasingSubsequence.js';

import { longestPalindromicSubsequence } from '../my-solutions/unorganized/longestPalindromicSubsequence.js';
import { kthSmallest } from '../my-solutions/unorganized/kthSmallest.js';

import { numberOfInversions } from '../my-solutions/unorganized/numberOfInversions.js';

import { countSumSubArrays } from '../my-solutions/unorganized/countSumSubArrays.js';

import { maximumSubArrayProduct } from '../my-solutions/unorganized/maximumSubArrayProduct.js';
import { minimumCoinAmount } from '../my-solutions/unorganized/minimumCoinAmount.js';

import { longestCommonSubstring } from '../my-solutions/unorganized/longestCommonSubstring.js';

import { maximumSumSubmatrix } from '../my-solutions/unorganized/maximumSumSubmatrix.js';

import { maximumSumCircular } from '../my-solutions/unorganized/maximumSumCircular.js';

import { trieTest } from '../my-solutions/unorganized/trie.js';

import { isSubsequence } from '../my-solutions/unorganized/isSubsequence.js';

import { isBinarySearchTree } from '../my-solutions/unorganized/isBinarySearchTree.js';
import { maximumSumTwoChanged } from '../my-solutions/unorganized/maximumSumTwoChanged.js';
import { minDeleteToSorted } from '../my-solutions/unorganized/minDeleteToSorted.js';
import { minStepsToEqualStrings } from '../my-solutions/unorganized/minStepsToEqualStrings.js';
import { maxSumCircularSubArray2 } from '../my-solutions/unorganized/maxSumCircularSubArray2.js';

describe('find the maximum subarray sum in a circular array', () => {
  it('should be true for output: "7"', () => {
    const input = [2, -1, 3, 4, -5];
    const expected = '7';
    const res = maxSumCircularSubArray2(arr);
    console.log('Returned: ');
    console.log(res);
    assert.equal(res, expected);
    // assert.deepEqual(res, expected);
  });
});

// describe('find the minimum number of steps to transform one string to another', () => {
//   it(`'should be true for output: "3 steps: 'cat' -> 'cot' -> 'cog' -> 'dog'"'`, () => {
//     const input1 = 'cat';
//     const input2 = 'dog';
//     const expected = 3;
//     const res = minStepsToEqualStrings(input1, input2);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it(`'should be true for output: "3 steps: 'cat' -> 'cot' -> 'cog' -> 'dog'"'`, () => {
//     const input1 = 'song';
//     const input2 = 'bongaloo';
//     const expected = 5;
//     const res = minStepsToEqualStrings(input1, input2);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('find the minimum number of elements to delete from an array to make it sorted', () => {
//   it('should be true for output: "2"', () => {
//     const input = [5, 3, 1, 2, 4];
//     const expected = 2;
//     const res = minDeleteToSorted(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should return 4 for array with alternating increases and decreases', () => {
//     const input = [1, 3, 2, 4, 3, 5];
//     const expected = 2;
//     const res = minDeleteToSorted(input);
//     assert.equal(res, expected);
//   });
//   it('should return 0 for an already sorted array', () => {
//     const input = [1, 2, 3, 4, 5];
//     const expected = 0;
//     const res = minDeleteToSorted(input);
//     assert.equal(res, expected);
//   });
//   it('should return 0 for a reverse sorted array', () => {
//     const input = [5, 4, 3, 2, 1];
//     const expected = 0;
//     const res = minDeleteToSorted(input);
//     assert.equal(res, expected);
//   });
//   it('should return 0 for array with all equal elements', () => {
//     const input = [2, 2, 2, 2, 2];
//     const expected = 0;
//     const res = minDeleteToSorted(input);
//     assert.equal(res, expected);
//   });
//   it('should return a correct number for a large array with random elements', () => {
//     const input = [10, 1, 5, 3, 8, 7, 6, 2, 9, 4];
//     const expected = 5; // Assuming the correct number of deletions is 6
//     const res = minDeleteToSorted(input);
//     assert.equal(res, expected);
//   });
// });

// describe('Find the maximum sum of a subarray with at most two elements changed', () => {
//   it('should handle a mix of positive and negative numbers1', () => {
//     const input = [1, -1, 1];
//     const expected = 11; // Assuming change = 5; change -3 and -5
//     const res = maximumSumTwoChanged(input);
//     assert.equal(res, expected);
//   });
//   it('should handle a mix of positive and negative numbers2', () => {
//     const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//     const expected = 7; // Assuming change = 5; change -3 and -5
//     const res = maximumSumTwoChanged(input);
//     assert.equal(res, expected);
//   });

//   it('should handle an array of all positive numbers', () => {
//     const input = [1, 2, 3, 4];
//     const expected = 10; // No need to change any element
//     const res = maximumSumTwoChanged(input);
//     assert.equal(res, expected);
//   });

//   it('should handle an array of all negative numbers', () => {
//     const input = [-1, -2, -3, -4];
//     const expected = 10; // Change any two elements to 5
//     const res = maximumSumTwoChanged(input);
//     assert.equal(res, expected);
//   });

//   it('should handle an array with a single element', () => {
//     const input = [5];
//     const expected = 5; // Only one element, no change needed
//     const res = maximumSumTwoChanged(input);
//     assert.equal(res, expected);
//   });

//   it('should handle an empty array', () => {
//     const input = [];
//     const expected = 0; // No elements to sum
//     const res = maximumSumTwoChanged(input);
//     assert.equal(res, expected);
//   });

//   it('should handle an array where changing elements is not beneficial', () => {
//     const input = [5, 6, 7, 8];
//     const expected = 26; // Array is already maximized
//     const res = maximumSumTwoChanged(input);
//     assert.equal(res, expected);
//   });
// });

// import { longestValidParenthesis } from '../my-solutions/unorganized/longestValidParenthesis.js';

// describe('find the length of the longest valid parentheses sequence', () => {
//   it('should be true for output: "8"', () => {
//     const input = '((()))()';
//     const expected = '8';
//     const res = longestValidParenthesis(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// import { postOrderTraversalBST } from '../my-solutions/unorganized/postOrderTraversalBST.js';

// describe('Reconstruct a binary search tree from its postorder traversal', () => {
//   it('should reconstruct an empty tree', () => {
//     const input = [];
//     const expected = [];
//     const res = postOrderTraversalBST(input);
//     //assert.deepEqual(inorderTraversal(res), expected);
//   });

//   it('should reconstruct a single node tree', () => {
//     const input = [5];
//     const expected = [5];
//     const res = postOrderTraversalBST(input);
//     //assert.deepEqual(inorderTraversal(res), expected);
//   });

//   it('should reconstruct a complete binary tree', () => {
//     const input = [1, 3, 2, 5, 7, 6, 4]; // Postorder of the tree with root 4
//     const expected = [1, 2, 3, 4, 5, 6, 7]; // Inorder (sorted) of the same tree
//     const res = postOrderTraversalBST(input);
//     //assert.deepEqual(inorderTraversal(res), expected);
//   });

//   it('should reconstruct a left-skewed tree', () => {
//     const input = [1, 2, 3, 4, 5]; // Postorder of a left-skewed tree
//     const expected = [1, 2, 3, 4, 5]; // Inorder (sorted) of the same tree
//     const res = postOrderTraversalBST(input);
//     //assert.deepEqual(inorderTraversal(res), expected);
//   });

//   it('should reconstruct a right-skewed tree', () => {
//     const input = [5, 4, 3, 2, 1]; // Postorder of a right-skewed tree
//     const expected = [1, 2, 3, 4, 5]; // Inorder (sorted) of the same tree
//     const res = postOrderTraversalBST(input);
//     //assert.deepEqual(inorderTraversal(res), expected);
//   });

//   // Add more test cases as needed
// });

// import { preorderTraversalBST } from '../my-solutions/unorganized/preorderTraversalBST.js';

// describe('Reconstruct a binary search tree from its preorder traversal', () => {
//   it('should be true for output: "A binary search tree reconstructed from the given preorder traversal sequence"', () => {
//     const input = 'A preorder traversal sequence of a binary search tree';
//     const expected = 'A binary search tree reconstructed from the given preorder traversal sequence';
//     const res = preorderTraversalBST();
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// import { constructBST } from '../my-solutions/unorganized/constructBST.js';

// describe('Construct a binary search tree from a given array', () => {
//   it('should be true for output: "A binary search tree with the given array elements as nodes"', () => {
//     const input = [6, 3, 5, 7, 9];
//     const expected = 'A binary search tree with the given array elements as nodes';
//     const res = constructBST(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// describe('Check if a binary tree is a binary search tree', () => {
//   it('should return true for a valid BST', () => {
//     const root = new TreeNode(10);
//     root.left = new TreeNode(5);
//     root.right = new TreeNode(15);
//     root.left.left = new TreeNode(3);
//     root.left.right = new TreeNode(7);
//     root.right.left = new TreeNode(12);
//     root.right.right = new TreeNode(18);
//     assert.equal(isBinarySearchTree(root), true);
//   });

//   it('should return false for an invalid BST', () => {
//     const root = new TreeNode(10);
//     root.left = new TreeNode(5);
//     root.right = new TreeNode(8); // Should be greater than 10 to be valid
//     assert.equal(isBinarySearchTree(root), false);
//   });

//   it('should return true for a single-node tree', () => {
//     const root = new TreeNode(10);
//     assert.equal(isBinarySearchTree(root), true);
//   });

//   it('should return true for an empty tree', () => {
//     assert.equal(isBinarySearchTree(null), true);
//   });

//   it('should return false for a tree with duplicate values', () => {
//     const root = new TreeNode(10);
//     root.left = new TreeNode(10); // Duplicate value
//     assert.equal(isBinarySearchTree(root), false);
//   });
// });

// describe('check if a string is a subsequence of another string', () => {
//   it('should return true when str1 is a subsequence of str2', () => {
//     const str1 = 'abc';
//     const str2 = 'ahbgdc';
//     const result = isSubsequence(str1, str2);
//     expect(result).to.be.true;
//   });

//   it('should return false when str1 is not a subsequence of str2', () => {
//     const str1 = 'axc';
//     const str2 = 'ahbgdc';
//     const result = isSubsequence(str1, str2);
//     expect(result).to.be.false;
//   });

//   it('should return true for an empty str1', () => {
//     const str1 = '';
//     const str2 = 'ahbgdc';
//     const result = isSubsequence(str1, str2);
//     expect(result).to.be.true;
//   });

//   it('should return false for an empty str2 but non-empty str1', () => {
//     const str1 = 'abc';
//     const str2 = '';
//     const result = isSubsequence(str1, str2);
//     expect(result).to.be.false;
//   });

//   it('should return true when both str1 and str2 are empty', () => {
//     const str1 = '';
//     const str2 = '';
//     const result = isSubsequence(str1, str2);
//     expect(result).to.be.true;
//   });
// });

// describe('implement a trie', () => {
//   it('should be true for output: "The corresponding trie"', () => {
//     const input = 'A string';
//     const expected = 'The corresponding trie';
//     const res = trieTest(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, res);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('find the maximum sum of a circular subarray', () => {
//   it('should be true for output: "8"', () => {
//     const input = [1, -2, 3, 4];
//     const expected = 8; //3+4  +1
//     const res = maximumSumCircular(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "8"', () => {
//     const input = [5, -3, 5];
//     const expected = 10; //3+4  +1
//     const res = maximumSumCircular(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });
// // this is same as previous, but it also lets me practice and train my memory a little bit
// describe('find the maximum sum rectangle in a 2d matrix', () => {
//   it('should be true for output: "The maximum sum rectangle is [[3, 8, 10, 1], [-4, -1, 1, 7]] with a sum of 29."', () => {
//     const input = [
//       [6, -5, -7, 4, -4],
//       [-9, 3, -6, 5, 2],
//       [-10, 4, 7, -6, 3],
//       [-8, 9, -3, 3, -7],
//     ];
//     const expected = [
//       [4, 7],
//       [9, -3],
//     ]; // 29
//     const res = maximumSumSubmatrix(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.deepEqual(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('find the maximum sum rectangle in a 2d matrix', () => {
//   it('should be true for output: "The maximum sum rectangle is [[3, 8, 10, 1], [-4, -1, 1, 7]] with a sum of 29."', () => {
//     const input = [
//       [6, -5, -7, 4, -4],
//       [-9, 3, -6, 5, 2],
//       [-10, 4, 7, -6, 3],
//       [-8, 9, -3, 3, -7],
//     ];
//     const expected = [
//       [4, 7],
//       [9, -3],
//     ]; // 29
//     const res = maximumSumRectangle(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.deepEqual(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('find the length of the longest common substring', () => {
//   it('should be true for output: "The output should be 3, as the longest common substring is ADH"', () => {
//     const input1 = 'ABCEDGH';
//     const input2 = 'AECEDFHR';
//     const expected = 3; //"adh"
//     const res = longestCommonSubstring(input1, input2);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('Find the minimum number of coins to make a given amount', () => {
//   it('should be true for output: "The minimum number of coins needed to make 40 is 4 (1x25, 1x10, 1x5, 1x1)"', () => {
//     const input = [1, 5, 10, 25];
//     const input2 = 40;
//     const expected = 3; // 'The minimum number of coins needed to make 40 is 3 (1x25, 1x10, 1x5, 0x1)';

//     const res = minimumCoinAmount(input, input2);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The minimum number of coins needed to make 40 is 4 (1x25, 1x10, 1x5, 1x1)"', () => {
//     const input = [25, 10, 5];
//     const input2 = 30;
//     const expected = 2; // 'The minimum number of coins needed to make 40 is 3 (1x25, 1x10, 1x5, 0x1)';

//     const res = minimumCoinAmount(input, input2);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The minimum number of coins needed to make 40 is 4 (1x25, 1x10, 1x5, 1x1)"', () => {
//     const input = [9, 6, 5, 1];
//     const input2 = 11;
//     const expected = 2; // 'The minimum number of coins needed to make 40 is 3 (1x25, 1x10, 1x5, 0x1)';

//     const res = minimumCoinAmount(input, input2);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('find the maximum product of a subarray', () => {
//   it('should be true for output: "120"', () => {
//     const input = [1, 2, 3, 4, 5];
//     const expected = 120;
//     const res = maximumSubArrayProduct(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('find the number of subarrays with a given sum', () => {
//   it('should be true for output: "3"', () => {
//     const input = [1, 2, 3];
//     const input2 = 3;
//     const expected = 2;
//     const res = countSumSubArrays(input, input2);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('Find the number of inversions in an array', () => {
//   it('should be true for output: "3"', () => {
//     const input = [2, 4, 1, 3, 5];
//     const expected = 3;
//     const res = numberOfInversions(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('Find the kth smallest element in an array', () => {
//   it('should be true for output: "The 3rd smallest element in the array is 3"', () => {
//     const input = [3, 5, 2, 4, 1];
//     const expected = 3;
//     const n = 3;
//     const res = kthSmallest(input, n);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('find the length of the longest palindromic subsequence', () => {
//   it('should be true for output: "5"', () => {
//     const input = 'ABCBAC';
//     const expected = 5;
//     const res = longestPalindromicSubsequence(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// describe('find the length of the longest increasing subsequence', () => {
//   it('should be true for output: "6"', () => {
//     const input = [10, 22, 9, 33, 21, 50, 41, 60, 80];
//     const expected = 6;
//     const res = longestIncreasingSubsequence(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the number of pairs with a given difference', () => {
//   it('should be true for output: "Number of pairs with given difference = 2"', () => {
//     const input1 = [1, 5, 3, 4, 2];
//     const input2 = 2;
//     const expected = 3;
//     const uniquesOnly = false;
//     const res = numberOfDifPairs(input1, input2, uniquesOnly);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "Number of pairs with given difference = 4"', () => {
//     const array = [6, 12, 4, 8, 2, 9, 15, 1, 10];
//     const difference = 4;
//     const expected = 4;
//     const uniquesOnly = false;
//     const res = numberOfDifPairs(array, difference, uniquesOnly);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the number of pairs with a given sum', () => {
//   it('should be true for output: "Number of pairs: 2"', () => {
//     const input1 = [1, 2, 3, 4, 5];
//     const input2 = 7;
//     const expected = 2;
//     const res = numberOfSumPairs(input1, input2);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "Number of pairs: 2"', () => {
//     const numbers1 = [1, 3, 5, 7, 9];
//     const targetSum1 = 8;

//     const expected = 2;
//     const res = numberOfSumPairs(numbers1, targetSum1);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "Number of pairs: 2"', () => {
//     const numbers2 = [1, 4, 7, 4, 9, 2, 5, 7, 3, 8, 8, 13, -2];
//     const targetSum2 = 11;

//     const expected = 4;
//     const res = numberOfSumPairs(numbers2, targetSum2, true);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// done
// describe('check if two rectangles overlap', () => {
//   it('should be true for output: "The output will be a boolean value indicating whether the rectangles overlap or not (true/false)."', () => {
//     const i = 0;
//     const a = rectangles[i].a;
//     const b = rectangles[i].b;
//     const expected = true;
//     const res = rectangleOverlap(a, b);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The output will be a boolean value indicating whether the rectangles overlap or not (true/false)."', () => {
//     const i = 2;
//     const a = rectangles[i].a;
//     const b = rectangles[i].b;
//     const expected = false;
//     const res = rectangleOverlap(a, b);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });
// // done
// describe('Find the diameter of a binary tree', () => {
//   class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
//   it('should be true for output: "The diameter of the binary tree"', () => {
//     const binaryTree1 = [
//       1, // root
//       2,
//       3, // level 1
//       4,
//       5,
//       6,
//       7, // level 2
//     ];

//     const input = binaryTree1;
//     const expected = 6;
//     const res = binaryTreeDiameter1(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The diameter of the binary tree"', () => {
//     const tree = new Node(1);
//     tree.left = new Node(2);
//     tree.right = new Node(3);
//     tree.left.left = new Node(4);
//     tree.left.right = new Node(5);
//     tree.right.left = new Node(6);
//     tree.right.right = new Node(7);

//     const input = { root: tree };
//     const expected = 4;
//     const res = binaryTreeDiameter2(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The diameter of the binary tree"', () => {
//     const binaryTree1 = [
//       1, // root
//       2,
//       3, // level 1
//       4,
//       5,
//       6,
//       7, // level 2
//     ];

//     const input = binaryTree1;
//     const expected = 4;
//     const res = binaryTreeDiameter3(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// done
// describe('Find the shortest path between two nodes in a graph', () => {
//   it('should be true for output: "The shortest path between the two nodes is the path with the least number of edges."', () => {
//     // 0---1
//     // |   |
//     // |   |
//     // 3---2
//     // |
//     // |
//     // 4
//     // export const uGraph1 = {
//     //   0: [1, 3],
//     //   1: [0, 2],
//     //   2: [1, 3],
//     //   3: [0, 2, 4],
//     //   4: [3],
//     // };

//     const i = 0;
//     const input = getUnweightedGraphs()[i];
//     const a = 1;
//     const b = 4;
//     const expected = 3;
//     const res = shortestUnweightedPath(input, a, b);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The shortest path between the two nodes is the path with the least number of edges."', () => {
//     // 0---1
//     // |   |
//     // |   |
//     // 3---2
//     // |
//     // |
//     // 4
//     // export const uGraph1 = {
//     //   0: [1, 3],
//     //   1: [0, 2],
//     //   2: [1, 3],
//     //   3: [0, 2, 4],
//     //   4: [3],
//     // };

//     const i = 0;
//     const input = getUnweightedGraphs()[i];
//     const a = 0;
//     const b = 2;
//     const expected = 2;
//     const res = shortestUnweightedPath(input, a, b);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });
// // done
// describe('find the number of connected components in a graph', () => {
//   it('should be true for output: "The number of connected components in G."', () => {
//     const i = 1;
//     const input = getGraphs()[i];
//     const expected = getGraphAns()[i];
//     const res = countConnectedNodes(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the number of islands in a 2d grid', () => {
//   it('should be true for output: "3"', () => {
//     const input = [
//       [1, 1, 0, 0, 0],
//       [0, 1, 0, 0, 1],
//       [1, 0, 0, 1, 1],
//       [0, 0, 0, 0, 0],
//     ];
//     const expected = 2;
//     const res = countIslands(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });
// describe('find the number of islands in a 2d grid', () => {
//   it('should be true for output: "5"', () => {
//     const input = [
//       [1, 1, 0, 0, 0, 1, 1],
//       [0, 1, 0, 0, 1, 0, 1],
//       [1, 0, 0, 1, 1, 1, 0],
//       [0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 0, 1, 1, 0, 0],
//       [1, 1, 0, 0, 0, 0, 1],
//     ];

//     const expected = 5;
//     const res = countIslands(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// //done

// describe('find the number of ways to traverse a matrix', () => {
//   it('should be true for output: "6"', () => {
//     const m = 5;
//     const n = 5;
//     const expected = 70;
//     const res = waysToTraverseMatrix(m, n);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// //done
// describe('find the number of valid parentheses combinations', () => {
//   it('should be true for output: "Number of valid parentheses combinations"', () => {
//     const input = 10;
//     const expected = 5;
//     const res = waysToUseGivenBrackets(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "Number of valid parentheses combinations"', () => {
//     const input = 10;
//     const expected = 5;
//     const res = catalanBracketCount(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the number of ways to make change for a given amount', () => {
//   it('should be true for output: "The output would be the total number of ways to make change for 5 using coins of different denominations, which is 5."', () => {
//     // const input = { cash: 5, change: [1, 2, 3] };
//     const input = { cash: 16, change: [1, 2, 3] };
//     const expected = 30;
//     const res = countWaysToGiveCoin(input.cash, input.change);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The output would be the total number of ways to make change for 5 using coins of different denominations, which is 5."', () => {
//     // const input = { cash: 5, change: [1, 2, 3] };
//     const input = { cash: 16, change: [1, 2, 3] };
//     const expected = 30;
//     const res = countWaysToGive(input.cash, input.change);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the length of the longest common subsequence', () => {
//   const examples = [
//     ['Two strings, s1 and s2', 'Three strings, s1, s2 and s3'],
//     ['abcd', 'abedc'],
//     ['abc', 'def'],
//     ['abc', 'ac'],
//     ['1234', '1342'],
//     ['aabaa', 'aaaaa'],
//     ['hello', 'world'], // because algorithm finds non sequential subsequences too, LO and OL, which would not count in the end
//     ['abcd', 'dcba'],
//     ['aabbcc', 'abccba'],
//     ['abcdef', 'ghijkl'],
//     ['abc', 'cba'],
//   ];

//   const correctAnswers = [
//     'T strings, s1 and s',
//     'abc',
//     '',
//     'ac',
//     '34',
//     'aaa',
//     '',
//     'dcb',
//     'abc',
//     '',
//     'c',
//   ];

//   it('should be true for output: "The length of the longest common subsequence"', () => {
//     const i = 1;
//     const s1 = examples[i][0];
//     const s2 = examples[i][1];
//     const expected = correctAnswers[i].length;
//     const res = lengthOfLcs(s1, s2);
//     assert.equal(res, expected);
//   });
// });

// //done
// describe('find the largest sum of a consecutive subarray', () => {
//   it('should be true for output: "6"', () => {
//     const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//     const expected = 6;
//     const res = largestConsecutiveSum(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the longest substring without repeating characters', () => {
//   it('should be true for output: "abc"', () => {
//     const input = 'abcdefghijkadabgladosacabaalboquirke';
//     const expected = 'bcad';
//     const res = longestNonRepeatingString(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });
// // done
// describe('implement a hash table', () => {
//   it('should be true for output: "The output of a hash table is the value associated with the given key."', () => {
//     const t = new HashTable(10);
//     t.add('abc', 1);
//     t.add('bcd', 2);
//     t.add('cba', 3);
//     const res = t.get('cba');
//     const expected = 3;
//     console.log('Returned: ' + t.get('cba'));
//     console.log(t);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The output of a hash table is the value associated with the given key."', () => {
//     const t = new HashTable(10);
//     t.add('abc', 1);
//     t.add('bcd', 2);
//     t.add('cba', 3);
//     const removed = t.remove('cba');
//     console.log('REMOVED: ' + removed);
//     const res = t.get('cba');
//     const expected = null;
//     console.log('Returned: ' + t.get('cba'));
//     console.log(t);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });
// // done
// describe('check if a string is a valid number', () => {
//   it('should be true for output: "true"', () => {
//     const input = '123';
//     const expected = true;
//     const res = isStringNumber(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "true"', () => {
//     const input = '123.1';
//     const expected = true;
//     const res = isStringNumber(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "true"', () => {
//     const input = '12a ?31a';
//     const expected = false;
//     const res = isStringNumber(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "true"', () => {
//     const input = '12f10abc';
//     const expected = true;
//     const res = isStringNumber(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "true"', () => {
//     const input = '123';
//     const expected = true;
//     const res = isStringInteger(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "true"', () => {
//     const input = '123.1';
//     const expected = false;
//     const res = isStringInteger(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "true"', () => {
//     const input = '123a';
//     const expected = false;
//     const res = isStringInteger(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "true"', () => {
//     const input = '123.a';
//     const expected = false;
//     const res = isStringInteger(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "true"', () => {
//     const input = '-123.12312';
//     const expected = true;
//     const res = isStringFloat(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('Find the lowest common ancestor of two nodes in a binary tree', () => {
//   it('should be true for output: "The lowest common ancestor of the two nodes"', () => {
//     const input = { root: getBalancedTrees()[0] };
//     const expected = 5;
//     const res = lowestCommonAncestor(
//       input.root,
//       { value: 3 },
//       { value: 7 }
//     ).value;
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('traverse a binary tree in in-order', () => {
//   it('should be true for output: "The nodes of the tree in in-order traversal order"', () => {
//     const input = { root: getBalancedTrees()[0] };
//     const expected = [3, 5, 7, 10, 12, 15, 20];
//     const res = traverseInOrder(input, 'value');
//     console.log('Returned: ');
//     console.log(res);
//     assert.deepEqual(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('traverse a binary tree in post-order', () => {
//   it('should be true for output: "The nodes of the tree in post-order"', () => {
//     const input = { root: getBalancedTrees()[0] };
//     const expected = [3, 7, 5, 12, 20, 15, 10];
//     const res = traverseInPostorder(input, 'value');
//     console.log('Returned: ');
//     console.log(res);
//     assert.deepEqual(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('traverse a binary tree in pre-order', () => {
//   it('should be true for output: "The nodes of the binary tree in pre-order"', () => {
//     const input = { root: getBalancedTrees()[0] };
//     const expected = [10, 5, 3, 7, 15, 12, 20];
//     const res = traverseInPreorder(input, 'value');
//     console.log('Returned: ');
//     console.log(res);
//     assert.deepEqual(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the maximum depth of a binary tree', () => {
//   it('should be true for output: "The maximum depth of the binary tree"', () => {
//     const input = { root: getBalancedTrees()[0] };
//     const expected = 3;
//     const res = maxDepthBinaryTree(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The maximum depth of the binary tree"', () => {
//     const input = { root: getUnbalancedTrees()[2] };
//     const expected = 4;
//     const res = maxDepthBinaryTree(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('Check if a binary tree is balanced', () => {
//   it('should be true for output: "True or False"', () => {
//     const input = { root: getBalancedTrees()[3] };
//     // console.log(input);
//     const expected = true;
//     const res = isBalanced(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "True or False"', () => {
//     const input = { root: getUnbalancedTrees()[2] };
//     // console.log(input);
//     const expected = false;
//     const res = isBalanced(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });
// // done
// describe('Check if a binary tree is balanced', () => {
//   it('should be true for output: "True or False"', () => {
//     const input = { root: getBalancedTrees()[3] };
//     // console.log(input);
//     const expected = true;
//     const res = isBinaryTreeBalanced(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "True or False"', () => {
//     const input = { root: getUnbalancedTrees()[2] };
//     // console.log(input);
//     const expected = false;
//     const res = isBinaryTreeBalanced(input);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the intersection of two linked lists', () => {
//   it('should be true for output: "The node at which the intersection begins"', () => {
//     const arr1 = [83, 42, 92, 19, 54, 69, 71, 37, 2, 99];
//     const arr2 = [83, 41, 91, 19, 53, 68, 70, 37, 1, 98];
//     const listA = new LinkedList();
//     const listB = new LinkedList();
//     listA.fill(arr1);
//     listB.fill(arr2);
//     const expected = 19;
//     const res = twoLinkedIntersection(listA, listB);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res ? res.data : res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });
// //done
// describe('check if a linked list contains a cycle', () => {
//   it('should be true for output: "True/False indicating whether a cycle exists in the linked list"', () => {
//     const arr = getNumericArray();
//     const listLoop = new LinkedListWithLoop();
//     listLoop.fill(arr);
//     const expected = true;
//     const res = linkedListHasCycle(listLoop);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be false for output: "True/False indicating whether a cycle exists in the linked list"', () => {
//     const arr = getNumericArray();
//     const listNoLoop = new LinkedList();
//     listNoLoop.fill(arr);
//     const expected = false;

//     const res = linkedListHasCycle(listNoLoop);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the number of elements in a linked list', () => {
//   it('should be true for output: "The number of elements in the linked list is 10."', () => {
//     const list = new LinkedList();
//     const arr = getNumericArray();
//     list.fill(arr);
//     const expected = arr.length;
//     const res = linkedListSize(list);
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('find the nth element of a linked list', () => {
//   it('should be true for output: "The nth element from the end of the list"', () => {
//     const list = new LinkedList();
//     const arr = getNumericArray();
//     list.fill(arr);
//     const n = 3;
//     const input = list;
//     const expected = arr[arr.length - n];
//     const res = findNthInLinked(n, input);
//     console.log('Returned: ');
//     console.log(arr);
//     console.log(res);
//     assert.equal(res.data, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The nth element from the end of the list"', () => {
//     const list = new LinkedList();
//     const arr = getNumericArray();
//     list.fill(arr);
//     const n = arr.length;
//     const input = list;
//     const expected = arr[0];
//     const res = findNthInLinked(n, input);
//     console.log('Returned: ');
//     console.log(arr);
//     console.log(res);
//     assert.equal(res.data, expected);
//     // assert.deepEqual(res, expected);
//   });
//   it('should be true for output: "The nth element from the end of the list"', () => {
//     const list = new LinkedList();
//     const arr = getNumericArray();
//     list.fill(arr);
//     const n = 1;
//     const input = list;
//     const expected = arr[arr.length - 1];
//     const res = findNthInLinked(n, input);
//     console.log('Returned: ');
//     console.log(arr);
//     console.log(res);
//     assert.equal(res.data, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// done
// describe('find the middle element of a linked list', () => {
//   it('should be true for output: "3"', () => {
//     const input = [1, 2, 9, 7, 4, 5];
//     const expected = 9;
//     const linkedList = new LinkedList();
//     linkedList.fill(input);
//     const res = findMiddleInLinked(linkedList).data;
//     console.log('Returned: ');
//     console.log(res);
//     assert.equal(res, expected);
//     // assert.deepEqual(res, expected);
//   });
// });

// // done
// describe('Find the common elements in two sorted arrays', () => {
//   it('should be true for output: "[1, 4, 9]"', () => {
//     const input1 = [1, 3, 4, 6, 7, 9];
//     const input2 = [1, 2, 4, 5, 9, 10];
//     const expected = [1, 4, 9];
//     const res = findCommonInTwo(input1, input2);
//     console.log('Returned: ');
//     console.log(res);
//     // assert.equal(res, expected);
//     assert.deepEqual(res, expected);
//   });
// });
// // done
// describe('implement queue', () => {
//   it('we added 15 first and removed 15 first, FIFO', () => {
//     const arr = [15, 47, 65, 4, 85, 70, 2, 59, 23, 54];

//     const q = new Queue();

//     for (let i = 0; i < arr.length; i++) {
//       const n = arr[i];
//       q.enqueue(n);
//     }

//     const res = q.dequeue();
//     console.log(q.get()); // reversed array?
//     assert.equal(res, 15);
//   });
// });

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
