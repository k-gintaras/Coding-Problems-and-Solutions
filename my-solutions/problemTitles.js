const titles = [
  {
    title: 'minMaxFinder',
    problem: 'Find the maximum and minimum numbers in an array',
  },
  {
    title: 'reverseString',
    problem: 'reverse a string',
  },
  {
    title: 'averageNumber',
    problem: 'find the average of a set of numbers',
  },
  {
    title: 'mostFrequentElement',
    problem: 'find the average of a set of numbers',
  },
  {
    title: 'implementLinkedList',
    problem: 'implement a linked list',
  },
  {
    title: 'isPalindrome',
    problem: 'check if a string is a palindrome',
  },
  {
    title: 'isPrime',
    problem: 'write a function to check if a number is prime',
  },
  {
    title: 'twoLargest',
    problem: 'find the two largest numbers in an array',
  },
  {
    title: 'mostCommon',
    problem: 'find the most common element in an array',
  },
  {
    title: 'reverseArray',
    problem: 'reverse an array',
  },
  {
    title: 'binarySearchTree',
    problem: 'implement a binary search tree',
  },
  {
    title: 'sortingAlgorithm',
    problem: 'implement a sorting algorithm',
  },
  {
    title: 'isAnagram',
    problem: 'check if two strings are anagrams',
  },
  {
    title: 'stringLength',
    problem: 'find the length of a string',
  },
  {
    title: 'isEven',
    problem: 'check if a number is even or odd',
  },
  {
    title: 'sumArray',
    problem: 'find the sum of all elements in an array',
  },
  {
    title: 'largestNumInBst',
    problem: 'find the largest element in a binary search tree',
  },
  {
    title: 'smallestNumInBst',
    problem: 'find the smallest element in a binary search tree',
  },
  {
    title: 'findDifference',
    problem: 'find the difference between the largest and smallest elements in an array',
  },
  {
    title: 'queue',
    problem: 'implement a queue',
  },
  {
    title: 'findCommonInTwo',
    problem: 'Find the common elements in two sorted arrays',
  },
  {
    title: 'findMiddleInLinked',
    problem: 'find the middle element of a linked list',
  },
  {
    title: 'findNthInLinked',
    problem: 'find the nth element of a linked list',
  },
  {
    title: 'linkedListSize',
    problem: 'find the number of elements in a linked list',
  },
  {
    title: 'linkedListHasCycle',
    problem: 'check if a linked list contains a cycle',
  },
  {
    title: 'twoLinkedIntersection',
    problem: 'find the intersection of two linked lists',
  },
  {
    title: 'isBinaryTreeBalanced',
    problem: 'Check if a binary tree is balanced',
  },
  {
    title: 'maxDepthBinaryTree',
    problem: 'find the maximum depth of a binary tree',
  },
  {
    title: 'traverseInPreorder',
    problem: 'traverse a binary tree in pre-order',
  },
  {
    title: 'traverseInPostorder',
    problem: 'traverse a binary tree in post-order',
  },
  {
    title: 'traverseInOrder',
    problem: 'traverse a binary tree in in-order',
  },
  {
    title: 'lowestCommonAncestor',
    problem: 'Find the lowest common ancestor of two nodes in a binary tree',
  },
  {
    title: 'isStringNumber',
    problem: 'check if a string is a valid number',
  },
  {
    title: 'hashTable',
    problem: 'implement a hash table',
  },
  {
    title: 'longestNonRepeatingString',
    problem: 'find the longest substring without repeating characters',
  },
  {
    title: 'largestConsecutiveSum',
    problem: 'find the largest sum of a consecutive subarray',
  },
  {
    title: 'longestCommonSubsequence',
    problem: 'find the length of the longest common subsequence',
  },
  {
    title: 'waysToGiveChange',
    problem: 'find the number of ways to make change for a given amount',
  },
  {
    title: 'waysToUseGivenBrackets',
    problem: 'find the number of valid parentheses combinations',
  },
  {
    title: 'waysToTraverseMatrix',
    problem: 'find the number of ways to traverse a matrix',
  },
  {
    title: 'countIslands',
    problem: 'find the number of islands in a 2d grid',
  },
  {
    title: 'countConnectedNodes',
    problem: 'find the number of connected components in a graph',
  },
  {
    title: 'shortestUnweightedPath',
    problem: 'Find the shortest path between two nodes in a graph',
  },
  {
    title: 'binaryTreeDiameter',
    problem: 'Find the diameter of a binary tree',
  },
  {
    title: 'rectangleOverlap',
    problem: 'check if two rectangles overlap',
  },
  {
    title: 'numberOfSumPairs',
    problem: 'find the number of pairs with a given sum',
  },
  {
    title: 'numberOfDifPairs',
    problem: 'find the number of pairs with a given difference',
  },
  {
    title: 'longestIncreasingSubsequence',
    problem: 'find the length of the longest increasing subsequence',
  },
  {
    title: 'longestPalindromicSubsequence',
    problem: 'find the length of the longest palindromic subsequence',
  },
  {
    title: 'kthSmallest',
    problem: 'Find the kth smallest element in an array',
  },
  {
    title: 'numberOfInversions',
    problem: 'Find the number of inversions in an array',
  },
  {
    title: 'countSumSubArrays',
    problem: 'find the number of subarrays with a given sum',
  },
  {
    title: 'maximumSubArrayProduct',
    problem: 'find the maximum product of a subarray',
  },
  {
    title: 'minimumCoinAmount',
    problem: 'Find the minimum number of coins to make a given amount',
  },
  {
    title: 'longestCommonSubstring',
    problem: 'find the length of the longest common substring',
  },
  {
    title: 'maximumSumRectangle',
    problem: 'find the maximum sum rectangle in a 2d matrix',
  },
  {
    title: 'maximumSumSubmatrix',
    problem: 'find the maximum sum submatrix in a 2d matrix',
  },
  {
    title: 'maximumSumCircular',
    problem: 'find the maximum sum of a circular subarray',
  },
  {
    title: 'trie',
    problem: 'implement a trie',
  },
  {
    title: 'isSubsequence',
    problem: 'check if a string is a subsequence of another string',
  },
  {
    title: 'isBinarySearchTree',
    problem: 'Check if a binary tree is a binary search tree',
  },
  {
    title: 'constructBST',
    problem: 'Construct a binary search tree from a given array',
  },
  {
    title: 'preorderTraversalBST',
    problem: 'Reconstruct a binary search tree from its preorder traversal',
  },
  {
    title: 'postOrderTraversalBST',
    problem: 'Reconstruct a binary search tree from its postorder traversal',
  },
  {
    title: 'longestValidParenthesis',
    problem: 'find the length of the longest valid parentheses sequence',
  },
  {
    title: 'maximumSumTwoChanged',
    problem: 'Find the maximum sum of a subarray with at most two elements changed',
  },
  {
    title: 'minDeleteToSorted',
    problem: 'find the minimum number of elements to delete from an array to make it sorted',
  },
  {
    title: 'minStepsToEqualStrings',
    problem: 'find the minimum number of steps to transform one string to another',
  },
  {
    title: 'maxSumCircularSubArray2',
    problem: 'find the maximum subarray sum in a circular array',
  },
  {
    title: 'maxProductSubarray',
    problem: 'find the maximum product subarray',
  },
];
