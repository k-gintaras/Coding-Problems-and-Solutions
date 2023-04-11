const jsons = [
  {
    statement: 'Find the maximum and minimum numbers in an array',
    description:
      'This problem requires you to find the highest and lowest numbers in a given array of numbers',
    topicExplanation:
      'This problem is related to the concept of finding the maximum and minimum values in an array of numbers',
    similarToProblem:
      'This problem is similar to finding the largest and smallest numbers in a list',
    tags: ['maximum', 'minimum', 'array', 'list'],
    inputExample: '[1, 5, 3, 8, 2]',
    outputExample: 'The maximum number is 8 and the minimum number is 1',
  },

  {
    statement: 'reverse a string',
    description: 'This problem requires you to reverse a given string',
    topicExplanation:
      'Reversing a string involves taking the characters of the string and rearranging them in the opposite order',
    similarToProblem: 'Palindrome Check',
    tags: ['string manipulation', 'reverse'],
    inputExample: 'Hello World',
    outputExample: 'dlroW olleH',
  },

  {
    statement: 'find the average of a set of numbers',
    description:
      'The average of a set of numbers is a measure of the central tendency of the data set. It is calculated by taking the sum of all the numbers in the set and dividing it by the number of values in the set.',
    topicExplanation:
      'Averages are a measure of central tendency, which is a way to describe a set of data by identifying the most common value in the set. The three most common measures of central tendency are the mean, median, and mode.',
    similarToProblem: 'Finding the mean, median, and mode of a set of numbers.',
    tags: ['averages', 'central tendency', 'mean', 'median', 'mode'],
    inputExample: '[1, 2, 3, 4, 5]',
    outputExample: 'The average of the set is 3.',
  },

  {
    statement: 'find the most frequent element in an array',
    description:
      'This problem requires you to find the element that appears most often in an array of elements.',
    topicExplanation:
      'This problem is related to counting and sorting algorithms.',
    similarToProblem:
      'This problem is similar to finding the mode of a set of numbers.',
    tags: ['algorithms', 'sorting', 'counting'],
    inputExample: '[1, 2, 3, 4, 4, 4, 5]',
    outputExample: '4',
  },

  {
    statement: 'implement a linked list',
    description:
      'A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. Each element of a list is stored in the form of a node, which contains two fields - data and a pointer to the next node in the list.',
    topicExplanation:
      'Linked lists are used to store linear collections of data. They are often used to implement other data structures such as stacks, queues, and graphs. Linked lists are also used in memory management, as they can be used to store data in a dynamic manner.',
    similarToProblem:
      'A linked list is similar to an array, but the elements are not stored in contiguous memory locations. Instead, each element is stored in a node, which contains a data field and a pointer to the next node in the list.',
    tags: ['data structures', 'linked list', 'pointers'],
    inputExample:
      'A linked list can be initialized with a given set of values.',
    outputExample:
      'The output of a linked list is the data stored in each node of the list.',
  },

  {
    statement: 'check if a string is a palindrome',
    description:
      'A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.',
    topicExplanation:
      'Palindromes are a type of word play, where a word or phrase is written in such a way that it reads the same forwards and backwards.',
    similarToProblem: 'Checking if a number is a palindrome',
    tags: ['string', 'palindrome', 'word play'],
    inputExample: 'racecar',
    outputExample: 'true',
  },

  {
    statement: 'write a function to check if a number is prime',
    description:
      'This function should take a number as an argument and return a boolean value indicating whether or not the number is prime',
    topicExplanation:
      'A prime number is a number that is only divisible by itself and 1. To check if a number is prime, you can divide it by all numbers between 2 and the number itself and check if any of them divide the number evenly',
    similarToProblem:
      'Checking if a number is prime is similar to checking if a number is even or odd',
    tags: ['prime number', 'function', 'boolean'],
    inputExample: 'checkPrime(7)',
    outputExample: 'true',
  },

  {
    statement: 'find the two largest numbers in an array',
    description:
      'This problem requires you to find the two largest numbers in an array of numbers.',
    topicExplanation:
      'This problem is related to the concept of sorting and searching algorithms.',
    similarToProblem:
      'This problem is similar to finding the largest number in an array.',
    tags: ['sorting', 'searching', 'algorithms'],
    inputExample: '[1, 5, 8, 3, 10, 6]',
    outputExample: '10, 8',
  },

  {
    statement: 'find the most common element in an array',
    description:
      'This problem requires you to find the element that appears most frequently in an array of elements.',
    topicExplanation:
      'This problem is related to the concept of finding the mode of a set of data.',
    similarToProblem:
      'This problem is similar to finding the mode of a set of data.',
    tags: ['arrays', 'data structures', 'algorithms'],
    inputExample: '[1, 2, 3, 3, 4, 4, 4]',
    outputExample: '4',
  },

  {
    statement: 'reverse an array',
    description:
      'This problem requires you to reverse the order of elements in an array',
    topicExplanation:
      'Reversing an array involves looping through the array and swapping the elements at the beginning and end of the array until the middle of the array is reached',
    similarToProblem: 'Reversing a string',
    tags: ['arrays', 'loops'],
    inputExample: '[1,2,3,4,5]',
    outputExample: '[5,4,3,2,1]',
  },

  {
    statement: 'implement a binary search tree',
    description:
      'A binary search tree is a data structure that stores data in a hierarchical structure, allowing for efficient retrieval of data. It is composed of nodes, each of which contains a key, a left child, and a right child. The left child is smaller than the parent node, and the right child is larger than the parent node. The tree is organized so that searching for a particular key is efficient.',
    topicExplanation:
      'A binary search tree is a data structure that allows for efficient retrieval of data. It is composed of nodes, each of which contains a key, a left child, and a right child. The left child is smaller than the parent node, and the right child is larger than the parent node. The tree is organized so that searching for a particular key is efficient.',
    similarToProblem:
      'Binary search trees are similar to other tree data structures such as AVL trees and red-black trees.',
    tags: ['data structure', 'binary search tree', 'tree'],
    inputExample: 'A list of integers',
    outputExample: 'A binary search tree containing the integers',
  },

  {
    statement: 'implement a sorting algorithm',
    description:
      'A sorting algorithm is an algorithm that puts elements of a list in a certain order. The most-used orders are numerical order and lexicographical order.',
    topicExplanation:
      'Sorting algorithms are used to optimize the performance and resources usage of a program. They can also be used to make searching and indexing more efficient.',
    similarToProblem:
      'Bubble sort, insertion sort, selection sort, merge sort, quick sort, heap sort, etc.',
    tags: ['algorithm', 'sorting'],
    inputExample: '[3, 2, 5, 1, 4]',
    outputExample: '[1, 2, 3, 4, 5]',
  },
  {
    statement: 'check if two strings are anagrams',
    description:
      'An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once',
    topicExplanation:
      'An anagram is a type of word play, where the letters of a word or phrase are rearranged to form a new word or phrase',
    similarToProblem: 'Checking if two strings are permutations of each other',
    tags: ['string manipulation', 'anagrams'],
    inputExample: "'listen', 'silent'",
    outputExample: 'True',
  },

  {
    statement: 'find the length of a string',
    description:
      'This problem requires you to find the length of a given string',
    topicExplanation:
      'The length of a string is the number of characters it contains',
    similarToProblem: 'Finding the length of a list',
    tags: ['string', 'length', 'count'],
    inputExample: "'Hello World'",
    outputExample: '11',
  },

  {
    statement: 'check if a number is even or odd',
    description:
      'This problem requires you to determine if a given number is even or odd',
    topicExplanation:
      'This problem is related to the concept of divisibility by 2',
    similarToProblem: 'Check if a number is divisible by 3',
    tags: ['divisibility', 'even/odd'],
    inputExample: 'The input is an integer',
    outputExample: "The output should be 'even' or 'odd'",
  },

  {
    statement: 'find the sum of all elements in an array',
    description:
      'This problem requires you to find the sum of all elements in an array',
    topicExplanation:
      'This problem is related to basic arithmetic and requires you to loop through the array and add each element to a total sum',
    similarToProblem:
      'This problem is similar to finding the average of all elements in an array',
    tags: ['arrays', 'sum', 'arithmetic'],
    inputExample: '[1,2,3,4,5]',
    outputExample: '15',
  },

  {
    statement: 'find the largest element in a binary search tree',
    description:
      'The largest element in a binary search tree is the rightmost node in the tree. To find it, start at the root node and traverse down the right subtree until you reach a leaf node. The value of the leaf node is the largest element in the tree.',
    topicExplanation:
      'A binary search tree is a type of tree data structure in which each node has at most two children, and the left child is always less than the parent node and the right child is always greater than the parent node. This structure allows for efficient searching of elements in the tree.',
    similarToProblem: 'Finding the maximum element in a binary tree',
    tags: ['binary search tree', 'maximum element', 'tree data structure'],
    inputExample: 'A binary search tree',
    outputExample: 'The largest element in the tree',
  },

  {
    statement: 'find the smallest element in a binary search tree',
    description:
      'A binary search tree is a type of data structure that stores data in a hierarchical manner. The smallest element in a binary search tree is the leftmost node in the tree.',
    topicExplanation:
      'Binary search trees are a type of data structure that allow for efficient searching and sorting of data. The smallest element in a binary search tree is the leftmost node in the tree.',
    similarToProblem:
      'Finding the minimum element in a binary search tree is similar to finding the minimum element in an array.',
    tags: ['binary search tree', 'data structure', 'minimum element'],
    inputExample: 'A binary search tree',
    outputExample: 'The leftmost node in the tree',
  },

  {
    statement:
      'find the difference between the largest and smallest elements in an array',
    description:
      'This problem requires you to find the difference between the largest and smallest elements in an array of numbers.',
    topicExplanation:
      'This problem involves finding the difference between two numbers, which is a basic arithmetic operation.',
    similarToProblem:
      'This problem is similar to finding the range of an array.',
    tags: ['arithmetic', 'array', 'difference', 'largest', 'smallest'],
    inputExample: '[1, 5, 8, 10, 12]',
    outputExample: '11',
  },

  {
    statement: 'implement a queue',
    description:
      'A queue is a data structure that follows the First In First Out (FIFO) principle. It is used to store data in a linear fashion, where the first element added is the first one to be removed.',
    topicExplanation:
      'Queues are often used in computer programming to store data that needs to be processed in a specific order. They are also used in operating systems to manage processes.',
    similarToProblem:
      'A queue is similar to a stack, which is another linear data structure that follows the Last In First Out (LIFO) principle.',
    tags: ['data structure', 'queue', 'FIFO', 'LIFO'],
    inputExample: 'Enqueue(5)',
    outputExample: '5',
  },

  {
    statement: 'Find the common elements in two sorted arrays',
    description: 'Given two sorted arrays, find the common elements in them',
    topicExplanation:
      'This problem can be solved using a linear search algorithm, which compares each element of one array to the elements of the other array',
    similarToProblem: 'Finding the intersection of two sets',
    tags: ['sorting', 'arrays', 'linear search'],
    inputExample: '[1, 3, 4, 6, 7, 9] and [1, 2, 4, 5, 9, 10]',
    outputExample: '[1, 4, 9]',
  },

  {
    statement: 'find the middle element of a linked list',
    description:
      'A linked list is a linear data structure where each element is a separate object. To find the middle element of a linked list, traverse the list and count the number of nodes. If the number of nodes is even, then the middle element is the node at the center of the list. If the number of nodes is odd, then the middle element is the node at the center of the list plus one.',
    topicExplanation:
      'Linked lists are a type of data structure that stores data in a linear fashion. Each element in the list is a separate object, and the elements are connected by links. To find the middle element of a linked list, you must traverse the list and count the number of nodes. Depending on whether the number of nodes is even or odd, the middle element will be the node at the center of the list or the node at the center of the list plus one.',
    similarToProblem: 'Finding the middle element of an array',
    tags: ['linked list', 'data structure', 'middle element'],
    inputExample: '[1,2,3,4,5]',
    outputExample: '3',
  },

  {
    statement: 'find the nth element of a linked list',
    description:
      'Given a linked list, find the nth element from the end of the list',
    topicExplanation:
      'Linked lists are a type of data structure that consists of a sequence of nodes, where each node contains a value and a pointer to the next node in the list. To find the nth element from the end of the list, you must traverse the list until you reach the nth node from the end.',
    similarToProblem:
      'Finding the kth element from the end of a singly linked list',
    tags: ['linked list', 'data structure', 'algorithm'],
    inputExample: 'A linked list with 5 elements',
    outputExample: 'The nth element from the end of the list',
  },

  {
    statement: 'find the number of elements in a linked list',
    description:
      'This problem requires you to traverse a linked list and count the number of elements in it.',
    topicExplanation:
      'Linked lists are a type of data structure that consists of a sequence of nodes, where each node contains a value and a pointer to the next node in the list.',
    similarToProblem: 'Counting the number of nodes in a binary tree',
    tags: ['linked list', 'data structure', 'counting'],
    inputExample:
      'A linked list with the following elements: 1 -> 2 -> 3 -> 4 -> 5',
    outputExample: 'The number of elements in the linked list is 5.',
  },
  {
    statement: 'check if a linked list contains a cycle',
    description:
      'A linked list is a data structure in which the objects are connected using pointers. A cycle in a linked list occurs when a node points back to a previous node in the list. This can cause an infinite loop if not handled properly.',
    topicExplanation:
      'Linked lists are a type of data structure that can be used to store data in a linear fashion. They are composed of nodes, which contain data and a pointer to the next node in the list. When a node points back to a previous node in the list, a cycle is created.',
    similarToProblem:
      'Checking for a cycle in a linked list is similar to detecting a loop in a graph.',
    tags: ['linked list', 'cycle', 'data structure'],
    inputExample: 'A linked list with nodes A, B, C, D, E, F, G',
    outputExample:
      'True/False indicating whether a cycle exists in the linked list',
  },

  {
    statement: 'find the intersection of two linked lists',
    description:
      'This problem involves finding the node at which the intersection of two singly linked lists begins. This can be done by comparing the nodes of each list and finding the first node that is the same in both lists.',
    topicExplanation:
      'Linked lists are a type of data structure that consists of a sequence of nodes, where each node contains a value and a pointer to the next node in the list. Intersection of two linked lists occurs when two linked lists share the same node.',
    similarToProblem: 'Finding the intersection of two arrays',
    tags: ['linked lists', 'intersection', 'data structures'],
    inputExample: 'Two linked lists, each with a head node',
    outputExample: 'The node at which the intersection begins',
  },

  {
    statement: 'Check if a binary tree is balanced',
    description:
      'A binary tree is said to be balanced if the difference between the heights of the left and right subtrees of every node is not more than 1',
    topicExplanation:
      'A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child',
    similarToProblem: 'Checking if a binary tree is a full binary tree',
    tags: ['binary tree', 'tree data structure', 'balanced tree'],
    inputExample: 'A binary tree',
    outputExample: 'True or False',
  },

  {
    statement: 'find the maximum depth of a binary tree',
    description:
      'The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node.',
    topicExplanation:
      'A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.',
    similarToProblem: 'Finding the height of a binary tree',
    tags: ['binary tree', 'depth', 'maximum depth'],
    inputExample: 'A binary tree',
    outputExample: 'The maximum depth of the binary tree',
  },

  {
    statement: 'traverse a binary tree in pre-order',
    description:
      'Traversing a binary tree in pre-order means to visit the root node first, then traverse the left subtree, followed by the right subtree.',
    topicExplanation:
      'Pre-order traversal is a type of depth-first search, where the root node is visited first, then the left subtree, followed by the right subtree.',
    similarToProblem: 'Traversing a binary tree in in-order or post-order.',
    tags: ['binary tree', 'traversal', 'pre-order'],
    inputExample: 'A binary tree represented as an array',
    outputExample: 'The nodes of the binary tree in pre-order',
  },

  {
    statement: 'traverse a binary tree in post-order',
    description:
      'Traversing a binary tree in post-order means to traverse the left subtree, then the right subtree, and finally the root node of the tree.',
    topicExplanation:
      'Post-order traversal is a type of depth-first traversal, meaning that it visits all the nodes of a subtree before visiting the root node. It is also known as a bottom-up approach.',
    similarToProblem:
      'Post-order traversal is similar to pre-order traversal, except that the root node is visited after the left and right subtrees.',
    tags: ['binary tree', 'traversal', 'post-order'],
    inputExample: 'A binary tree',
    outputExample: 'The nodes of the tree in post-order',
  },

  {
    statement: 'traverse a binary tree in in-order',
    description:
      'In-order traversal of a binary tree is a type of tree traversal in which the left subtree of a node is visited first, then the node itself, and then the right subtree.',
    topicExplanation:
      'In-order traversal is a type of depth-first search, which is a type of algorithm for traversing or searching tree or graph data structures.',
    similarToProblem:
      'In-order traversal is similar to pre-order and post-order traversal.',
    tags: ['binary tree', 'in-order traversal', 'depth-first search'],
    inputExample: 'A binary tree',
    outputExample: 'The nodes of the tree in in-order traversal order',
  },

  {
    statement: 'Find the lowest common ancestor of two nodes in a binary tree',
    description:
      'The lowest common ancestor (LCA) of two nodes in a binary tree is the deepest node that is the ancestor of both nodes',
    topicExplanation:
      'In a binary tree, the LCA of two nodes is the node that is farthest from the root and is an ancestor of both nodes. It is the node that is located farthest from the root and is an ancestor of both nodes',
    similarToProblem:
      'Finding the LCA of two nodes in a binary tree is similar to finding the LCA of two nodes in a binary search tree',
    tags: ['binary tree', 'lowest common ancestor', 'LCA'],
    inputExample: 'Two nodes in a binary tree',
    outputExample: 'The lowest common ancestor of the two nodes',
  },

  {
    statement: 'check if a string is a valid number',
    description:
      'This problem requires the user to determine if a given string is a valid number or not',
    topicExplanation:
      'This problem is related to the concept of data types and how to determine the type of a given value',
    similarToProblem:
      'This problem is similar to determining if a given string is a valid integer or float',
    tags: ['data types', 'string validation'],
    inputExample: "'123'",
    outputExample: 'true',
  },

  {
    statement: 'implement a hash table',
    description:
      'A hash table is a data structure that stores key-value pairs and uses a hash function to calculate an index into an array of buckets or slots, from which the desired value can be found.',
    topicExplanation:
      'Hash tables are used to implement associative arrays, or mappings of key-value pairs. They are also used to implement sets, which are collections of unique values.',
    similarToProblem:
      'Hash tables are similar to arrays, but they are more efficient for searching and inserting data.',
    tags: ['data structures', 'hash tables', 'arrays'],
    inputExample: 'A hash table takes a key and a value as input.',
    outputExample:
      'The output of a hash table is the value associated with the given key.',
  },

  {
    statement: 'find the longest substring without repeating characters',
    description:
      'This problem requires finding the longest substring in a given string without any repeating characters',
    topicExplanation:
      'This problem is related to string manipulation and can be solved using a sliding window technique',
    similarToProblem:
      'This problem is similar to the Longest Palindromic Substring problem',
    tags: ['string manipulation', 'sliding window'],
    inputExample: 'abcabcbb',
    outputExample: 'abc',
  },
  {
    statement: 'find the largest sum of a consecutive subarray',
    description:
      'Given an array of integers, find the largest sum of a consecutive subarray',
    topicExplanation:
      "This problem can be solved using the Kadane's algorithm, which is a dynamic programming approach to finding the maximum sum of a subarray",
    similarToProblem: 'Maximum Subarray Problem',
    tags: ['dynamic programming', "Kadane's algorithm"],
    inputExample: '[-2,1,-3,4,-1,2,1,-5,4]',
    outputExample: '6',
  },

  {
    statement: 'find the length of the longest common subsequence',
    description:
      'The longest common subsequence (LCS) problem is a classic computer science problem that involves finding the longest subsequence that is present in two given strings.',
    topicExplanation:
      'LCS is a dynamic programming problem that can be solved using a bottom-up approach. It is used in many applications such as sequence alignment, text comparison, and DNA sequence analysis.',
    similarToProblem:
      'LCS is similar to the Longest Common Substring problem, which is the longest substring that is present in two given strings.',
    tags: ['dynamic programming', 'LCS', 'sequence alignment'],
    inputExample: 'Two strings, s1 and s2',
    outputExample: 'The length of the longest common subsequence',
  },

  {
    statement: 'find the number of ways to make change for a given amount',
    description:
      'Given an amount of money, there are a number of ways to make change using coins of different denominations. This problem is to find the total number of ways to make change for a given amount using coins of different denominations.',
    topicExplanation:
      'This problem is a variation of the classic coin change problem. It involves finding the total number of ways to make change for a given amount using coins of different denominations.',
    similarToProblem:
      'The coin change problem is similar to the knapsack problem, where the goal is to maximize the value of items that can be placed in a knapsack of a given capacity.',
    tags: ['dynamic programming', 'coin change problem'],
    inputExample:
      'Given an amount of money, say 5, and coins of different denominations, say 1, 2, 3. The input would be 5 and [1,2,3].',
    outputExample:
      'The output would be the total number of ways to make change for 5 using coins of different denominations, which is 5.',
  },

  {
    statement: 'find the number of valid parentheses combinations',
    description:
      'Given a number n, find the total number of valid parentheses combinations that can be formed with n pairs of parentheses.',
    topicExplanation:
      'This problem can be solved using dynamic programming. The idea is to generate all valid parentheses combinations for a given number n and count them.',
    similarToProblem: 'Generating Parentheses',
    tags: ['dynamic programming', 'parentheses', 'combinations'],
    inputExample: 'Integer n',
    outputExample: 'Number of valid parentheses combinations',
  },

  {
    statement: 'find the number of ways to traverse a matrix',
    description:
      'Given a matrix of size m x n, the task is to count the number of ways to traverse from the top-left corner to the bottom-right corner. You can only move either down or right at any point in time.',
    topicExplanation:
      'This problem can be solved using dynamic programming. The idea is to store the number of ways to reach each cell in a 2D array. The value of each cell in the array will be the sum of the values of the cells directly above and to the left of it.',
    similarToProblem:
      'This problem is similar to the problem of counting the number of paths in a graph.',
    tags: ['matrix', 'traverse', 'dynamic programming'],
    inputExample: 'm = 3, n = 3',
    outputExample: '6',
  },

  {
    statement: 'find the number of islands in a 2d grid',
    description:
      'A 2D grid is a rectangular arrangement of cells in a grid. Each cell can either be empty or contain an island. The task is to find the number of islands in the grid.',
    topicExplanation:
      'This problem is related to graph theory and can be solved using a depth-first search algorithm.',
    similarToProblem:
      'This problem is similar to the number of connected components in a graph.',
    tags: ['graph theory', 'depth-first search', '2D grid'],
    inputExample: '[[1,1,0,0,0], [0,1,0,0,1], [1,0,0,1,1], [0,0,0,0,0]]',
    outputExample: '4',
  },

  {
    statement: 'find the number of connected components in a graph',
    description:
      'A connected component of an undirected graph is a subgraph in which any two vertices are connected to each other by paths, and which is connected to no additional vertices in the supergraph.',
    topicExplanation:
      'Connected components are used to identify the different pieces of a graph that are connected to each other. They are important for understanding the structure of a graph.',
    similarToProblem:
      'Finding the number of connected components in a graph is similar to finding the number of connected components in a network.',
    tags: ['graph theory', 'connected components'],
    inputExample: 'A graph G with n vertices and m edges.',
    outputExample: 'The number of connected components in G.',
  },

  {
    statement: 'Find the shortest path between two nodes in a graph',
    description:
      "The shortest path between two nodes in a graph is the path with the least number of edges between the two nodes. This can be found using a variety of algorithms, such as Dijkstra's algorithm or A* search.",
    topicExplanation:
      'Graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects. Graphs are composed of nodes, which represent the objects, and edges, which represent the relations between the objects. Finding the shortest path between two nodes in a graph is a common problem in graph theory.',
    similarToProblem:
      'Finding the shortest path between two nodes in a graph is similar to finding the shortest path between two points in a map. Both problems involve finding the path with the least number of edges between two points.',
    tags: ['graph theory', 'shortest path', 'algorithms'],
    inputExample: 'A graph with two nodes and three edges.',
    outputExample:
      'The shortest path between the two nodes is the path with the least number of edges.',
  },

  {
    statement: 'Find the diameter of a binary tree',
    description:
      'The diameter of a binary tree is the length of the longest path between any two nodes in the tree. It is also the maximum number of edges between two nodes in the tree.',
    topicExplanation:
      'The diameter of a binary tree is an important concept in tree data structures, as it can be used to measure the complexity of the tree.',
    similarToProblem: 'Finding the height of a binary tree',
    tags: ['binary tree', 'diameter', 'tree data structures'],
    inputExample: 'A binary tree represented as an array',
    outputExample: 'The diameter of the binary tree',
  },

  {
    statement: 'check if two rectangles overlap',
    description:
      'This problem involves determining whether two rectangles overlap or not. The input will be the coordinates of the two rectangles and the output will be a boolean value indicating whether the rectangles overlap or not.',
    topicExplanation:
      'This problem can be solved by using the concept of geometry and the properties of rectangles. The two rectangles can be compared to determine if they overlap or not.',
    similarToProblem:
      'This problem is similar to the problem of determining whether two circles overlap or not.',
    tags: ['geometry', 'rectangles', 'overlap'],
    inputExample:
      'The input will be the coordinates of the two rectangles in the form of (x1, y1, x2, y2) for the first rectangle and (x3, y3, x4, y4) for the second rectangle.',
    outputExample:
      'The output will be a boolean value indicating whether the rectangles overlap or not (true/false).',
  },
  {
    statement: 'find the number of pairs with a given sum',
    description:
      'Given an array of integers and a sum, find the number of pairs of integers in the array whose sum is equal to the given sum.',
    topicExplanation:
      'This problem can be solved using a brute-force approach, where we iterate through each element in the array and check if there is a pair with the given sum. We can also use a hash table to store the elements of the array and check for the sum in constant time.',
    similarToProblem: 'Two Sum Problem',
    tags: ['Array', 'Hash Table', 'Brute Force'],
    inputExample: 'Array: [1, 2, 3, 4, 5], Sum: 7',
    outputExample: 'Number of pairs: 2',
  },

  {
    statement: 'find the number of pairs with a given difference',
    description:
      'Given an array of integers and a number, find the number of pairs of integers in the array that have a difference equal to the given number',
    topicExplanation:
      'This problem can be solved using two nested loops. The outer loop will iterate through each element of the array and the inner loop will check if there is a pair with the given difference. If a pair is found, the count is incremented',
    similarToProblem:
      'This problem is similar to finding the number of pairs with a given sum',
    tags: ['array', 'loops', 'difference'],
    inputExample: 'Array = [1, 5, 3, 4, 2], Difference = 2',
    outputExample: 'Number of pairs with given difference = 2',
  },

  {
    statement: 'find the length of the longest increasing subsequence',
    description:
      "The longest increasing subsequence problem is the problem of finding a subsequence of a given sequence in which the subsequence's elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible",
    topicExplanation:
      'The longest increasing subsequence problem is a classic computer science problem that is used to demonstrate the power of dynamic programming. It is a common problem in data structures and algorithms and has applications in bioinformatics, cryptography, and other areas',
    similarToProblem:
      'The longest increasing subsequence problem is similar to the longest common subsequence problem, but with the added constraint that the elements in the subsequence must be in sorted order',
    tags: ['dynamic programming', 'data structures', 'algorithms'],
    inputExample: '[10, 22, 9, 33, 21, 50, 41, 60, 80]',
    outputExample: '6',
  },

  {
    statement: 'find the length of the longest palindromic subsequence',
    description:
      'A palindromic subsequence is a sequence of characters that is the same when read forwards and backwards. The length of the longest palindromic subsequence is the number of characters in the longest palindromic subsequence.',
    topicExplanation:
      'This problem is related to the Longest Common Subsequence problem, which is a classic problem in computer science. The difference is that in this problem, the characters in the subsequence must be the same when read forwards and backwards.',
    similarToProblem:
      'This problem is similar to the Longest Palindrome problem, which is the problem of finding the longest palindrome in a given string.',
    tags: ['dynamic programming', 'string manipulation'],
    inputExample: 'ABCBAC',
    outputExample: '4',
  },

  {
    statement: 'Find the kth smallest element in an array',
    description:
      'Given an array of integers, find the kth smallest element in the array',
    topicExplanation:
      'This problem can be solved using a variety of algorithms, such as the Quickselect algorithm or the Heapsort algorithm',
    similarToProblem:
      'This problem is similar to the problem of finding the kth largest element in an array',
    tags: ['algorithms', 'arrays', 'sorting'],
    inputExample: '[3, 5, 2, 4, 1]',
    outputExample: 'The 3rd smallest element in the array is 3',
  },

  {
    statement: 'Find the number of inversions in an array',
    description:
      'Inversion of an array is defined as a pair of indices (i, j) such that i < j and arr[i] > arr[j]. The number of inversions in an array is the total number of such pairs in the array',
    topicExplanation:
      'Inversion of an array is a concept used in sorting algorithms such as Merge Sort and Quick Sort. It is used to measure the efficiency of the sorting algorithm',
    similarToProblem: 'Counting Inversions in an Array',
    tags: ['sorting', 'algorithms', 'inversions'],
    inputExample: '[2, 4, 1, 3, 5]',
    outputExample: '3',
  },

  {
    statement: 'find the number of subarrays with a given sum',
    description:
      'This problem involves finding the number of subarrays in an array that have a given sum',
    topicExplanation:
      'This problem is related to the topic of dynamic programming, which involves breaking down a problem into smaller subproblems and solving them in order to find the overall solution',
    similarToProblem:
      'This problem is similar to the maximum subarray problem, which involves finding the maximum sum of a subarray in an array',
    tags: ['dynamic programming', 'subarray', 'sum'],
    inputExample: '[1,2,3,4,5] and sum = 8',
    outputExample: '3',
  },

  {
    statement: 'find the maximum product of a subarray',
    description:
      'Given an array of integers, find the maximum product of a subarray of size k',
    topicExplanation:
      'This problem can be solved using dynamic programming, where the maximum product of a subarray of size k is calculated by multiplying the maximum product of the previous subarray of size k with the current element',
    similarToProblem: 'Maximum Subarray Product',
    tags: ['dynamic programming', 'maximum product', 'subarray'],
    inputExample: '[1, 2, 3, 4, 5]',
    outputExample: '120',
  },

  {
    statement: 'Find the minimum number of coins to make a given amount',
    description:
      'Given a value of coins, determine the minimum number of coins needed to make a given amount',
    topicExplanation:
      'Coin change problem is a classic problem in computer science. It involves finding the minimum number of coins needed to make a given amount using a given set of coins',
    similarToProblem:
      'The coin change problem is similar to the knapsack problem',
    tags: ['coin change', 'dynamic programming', 'greedy algorithm'],
    inputExample:
      'Given a set of coins [1, 5, 10, 25] and an amount of money, say 40',
    outputExample:
      'The minimum number of coins needed to make 40 is 4 (1x25, 1x10, 1x5, 1x1)',
  },

  {
    statement: 'find the length of the longest common substring',
    description:
      'This problem requires finding the length of the longest common substring between two strings',
    topicExplanation:
      'The longest common substring problem is a classic computer science problem that involves finding the longest string that is a substring of two or more strings',
    similarToProblem:
      'The longest common substring problem is similar to the longest common subsequence problem',
    tags: ['string manipulation', 'dynamic programming'],
    inputExample: "The input strings are 'ABCDGH' and 'AEDFHR'",
    outputExample:
      "The output should be 3, as the longest common substring is 'ADH'",
  },

  {
    statement: 'find the maximum sum rectangle in a 2d matrix',
    description:
      'Given a 2D matrix of integers, find the maximum sum rectangle in the matrix. A rectangle is defined by its top left corner and bottom right corner.',
    topicExplanation:
      "This problem can be solved using Kadane's algorithm, which is a dynamic programming approach. The algorithm works by finding the maximum sum sub-rectangle in the matrix and then expanding it to find the maximum sum rectangle.",
    similarToProblem:
      "This problem is similar to the maximum sum subarray problem, which is also solved using Kadane's algorithm.",
    tags: ['dynamic programming', "Kadane's algorithm", '2D matrix'],
    inputExample:
      '[[1, 2, -1, -4, -20], [-8, -3, 4, 2, 1], [3, 8, 10, 1, 3], [-4, -1, 1, 7, -6]]',
    outputExample:
      'The maximum sum rectangle is [[3, 8, 10, 1], [-4, -1, 1, 7]] with a sum of 29.',
  },

  {
    statement: 'find the maximum sum submatrix in a 2d matrix',
    description:
      'A maximum sum submatrix is a submatrix of a given 2D matrix such that the sum of its elements is maximum.',
    topicExplanation:
      'The maximum sum submatrix problem is a variation of the maximum subarray problem, which is a well-known problem in computer science. It involves finding the submatrix with the maximum sum of its elements in a given 2D matrix.',
    similarToProblem:
      'The maximum sum submatrix problem is similar to the maximum subarray problem.',
    tags: ['matrix', 'submatrix', 'maximum sum'],
    inputExample: '[[1, 2, -1], [3, -2, 4], [5, 6, -7]]',
    outputExample:
      'The maximum sum submatrix is [[3, -2], [5, 6]] with a sum of 11.',
  },
  {
    statement: 'find the maximum sum of a circular subarray',
    description:
      'A circular subarray is a contiguous subarray of a given array of numbers which starts and ends at the same index. The maximum sum of a circular subarray is the maximum sum of all subarrays of the given array.',
    topicExplanation:
      'A circular subarray is a subarray of a given array of numbers which starts and ends at the same index. The maximum sum of a circular subarray is the maximum sum of all subarrays of the given array.',
    similarToProblem: 'Maximum Subarray Problem',
    tags: ['Dynamic Programming', 'Circular Subarray', 'Maximum Sum'],
    inputExample: '[1, -2, 3, 4]',
    outputExample: '7',
  },

  {
    statement: 'implement a trie',
    description:
      'A trie is a tree-like data structure used for storing strings. It is also known as a prefix tree, as it can be used to store a set of strings with a common prefix. Each node in the tree represents a single character of the string, and the path from the root to the node represents the string.',
    topicExplanation:
      'Tries are a type of data structure that can be used to store strings in an efficient manner. They are often used for searching and sorting strings, as well as for storing large dictionaries.',
    similarToProblem:
      'Tries are similar to other tree-like data structures such as binary search trees and hash tables.',
    tags: ['trie', 'data structure', 'tree', 'prefix tree'],
    inputExample: 'A string',
    outputExample: 'The corresponding trie',
  },

  {
    statement: 'check if a string is a subsequence of another string',
    description:
      'This problem involves determining whether a given string is a subsequence of another string.',
    topicExplanation:
      'A subsequence is a sequence of characters that appear in the same order as they do in the original string, but not necessarily adjacent to each other.',
    similarToProblem:
      'This problem is similar to the Longest Common Subsequence problem.',
    tags: ['string', 'subsequence', 'LCS'],
    inputExample: "Input: str1 = 'ABCD', str2 = 'AEDF'",
    outputExample: 'Output: True',
  },

  {
    statement: 'Check if a binary tree is a binary search tree',
    description:
      "A binary search tree is a type of binary tree in which the left subtree of a node contains only nodes with values less than the node's value, and the right subtree of a node contains only nodes with values greater than or equal to the node's value",
    topicExplanation:
      'Binary search trees are a type of data structure that can be used to store data in an organized manner. They are often used for searching and sorting data quickly',
    similarToProblem: 'Checking if a binary tree is a valid binary search tree',
    tags: ['binary tree', 'binary search tree', 'data structure'],
    inputExample: 'A binary tree',
    outputExample: 'True or False',
  },

  {
    statement: 'Construct a binary search tree from a given array',
    description:
      'A binary search tree is a type of data structure that stores data in a hierarchical structure. It is composed of nodes, each of which stores a single item of data and also links to up to two other nodes (known as the left and right child nodes). The data stored in each node must be greater than the data stored in its left child node and less than the data stored in its right child node. To construct a binary search tree from a given array, the array must be sorted in ascending order and then each element of the array is inserted into the tree in order. The left child node of a node is the node that stores the next smallest element in the array and the right child node is the node that stores the next largest element in the array.',
    topicExplanation:
      'Binary search trees are a type of data structure that can be used to store and retrieve data quickly. They are composed of nodes, each of which stores a single item of data and also links to up to two other nodes. To construct a binary search tree from a given array, the array must be sorted in ascending order and then each element of the array is inserted into the tree in order.',
    similarToProblem:
      'Constructing a binary search tree from a given linked list',
    tags: ['binary search tree', 'data structure', 'array'],
    inputExample: '[1, 3, 5, 7, 9]',
    outputExample:
      'A binary search tree with the given array elements as nodes',
  },

  {
    statement: 'Reconstruct a binary search tree from its preorder traversal',
    description:
      'A binary search tree is a type of tree in which each node has at most two children, and all left descendants are less than the parent node, and all right descendants are greater than the parent node. Preorder traversal is a type of tree traversal in which the root node is visited first, followed by the left subtree, and then the right subtree. Reconstructing a binary search tree from its preorder traversal involves creating a binary search tree from the given preorder traversal sequence.',
    topicExplanation:
      'Binary search trees are a type of data structure used to store data in a way that allows for efficient searching and retrieval. Preorder traversal is a type of tree traversal in which the root node is visited first, followed by the left subtree, and then the right subtree. Reconstructing a binary search tree from its preorder traversal involves creating a binary search tree from the given preorder traversal sequence.',
    similarToProblem:
      'Reconstructing a binary search tree from its inorder traversal',
    tags: ['binary search tree', 'preorder traversal', 'tree traversal'],
    inputExample: 'A preorder traversal sequence of a binary search tree',
    outputExample:
      'A binary search tree reconstructed from the given preorder traversal sequence',
  },

  {
    statement: 'Reconstruct a binary search tree from its postorder traversal',
    description:
      'A binary search tree is a type of tree data structure in which each node has at most two children, and all left descendants of a node are less than the node and all right descendants are greater than the node. Postorder traversal is a type of tree traversal in which the left subtree is visited first, then the right subtree, and finally the root node. Reconstructing a binary search tree from its postorder traversal involves creating a binary search tree from the given postorder traversal sequence.',
    topicExplanation:
      'Binary search trees are a type of tree data structure in which each node has at most two children, and all left descendants of a node are less than the node and all right descendants are greater than the node. Postorder traversal is a type of tree traversal in which the left subtree is visited first, then the right subtree, and finally the root node.',
    similarToProblem:
      'Reconstructing a binary search tree from its preorder traversal',
    tags: ['binary search tree', 'postorder traversal', 'tree traversal'],
    inputExample: 'A postorder traversal sequence of a binary search tree',
    outputExample:
      'A binary search tree reconstructed from the given postorder traversal sequence',
  },

  {
    statement: 'find the length of the longest valid parentheses sequence',
    description:
      'This problem requires finding the length of the longest valid parentheses sequence in a given string of parentheses',
    topicExplanation:
      'This problem is related to the topic of string manipulation and can be solved using a dynamic programming approach',
    similarToProblem:
      'This problem is similar to the Longest Valid Parentheses problem',
    tags: ['string manipulation', 'dynamic programming'],
    inputExample: '((()))()',
    outputExample: '6',
  },

  {
    statement:
      'Find the maximum sum of a subarray with at most two elements changed',
    description:
      'Given an array of integers, find the maximum sum of a subarray with at most two elements changed',
    topicExplanation:
      'This problem can be solved using dynamic programming, where the maximum sum of a subarray is calculated for each element in the array. The maximum sum of a subarray with at most two elements changed is then the maximum of the sums calculated for each element in the array',
    similarToProblem: 'This problem is similar to the maximum subarray problem',
    tags: ['dynamic programming', 'maximum subarray'],
    inputExample: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]',
    outputExample: '7',
  },

  {
    statement:
      'find the minimum number of elements to delete from an array to make it sorted',
    description:
      'Given an array of integers, find the minimum number of elements to delete from the array in order to make the array sorted in ascending order.',
    topicExplanation:
      'This problem can be solved using a greedy approach. We can iterate through the array and keep track of the maximum element seen so far. If the current element is less than the maximum element seen so far, then we can delete it. This approach will ensure that the remaining elements are sorted in ascending order.',
    similarToProblem:
      'This problem is similar to the Longest Increasing Subsequence problem.',
    tags: ['Array', 'Greedy'],
    inputExample: '[5, 3, 1, 2, 4]',
    outputExample: '2',
  },

  {
    statement:
      'find the minimum number of steps to transform one string to another',
    description:
      'Given two strings, find the minimum number of steps required to transform one string to another. A step consists of replacing one character with another character, deleting a character, or inserting a character.',
    topicExplanation:
      'String transformation is a common problem in computer science. It involves finding the shortest path from one string to another, usually by making small changes to the characters in the string.',
    similarToProblem:
      'This problem is similar to the Levenshtein distance problem, which is used to measure the difference between two strings.',
    tags: ['string transformation', 'Levenshtein distance'],
    inputExample: "String 1: 'cat' String 2: 'dog'",
    outputExample: "3 steps: 'cat' -> 'cot' -> 'cog' -> 'dog'",
  },

  {
    statement: 'find the maximum subarray sum in a circular array',
    description:
      'A circular array is an array where the last element is connected to the first element, forming a loop. The maximum subarray sum is the maximum sum of a subarray in the array, taking into account the loop.',
    topicExplanation:
      'The maximum subarray sum problem is a variation of the maximum subarray problem, which is a well-known problem in computer science. It is a variation because the array is circular, meaning that the last element is connected to the first element.',
    similarToProblem:
      "The maximum subarray sum problem is similar to the Kadane's algorithm, which is an algorithm used to find the maximum subarray sum in a non-circular array.",
    tags: ['maximum subarray sum', 'circular array', "Kadane's algorithm"],
    inputExample: '[2, -1, 3, 4, -5]',
    outputExample: '7',
  },
  {
    statement: 'find the maximum product subarray',
    description:
      'Given an array of integers, find the subarray with the maximum product',
    topicExplanation:
      'This problem can be solved using dynamic programming, where the maximum product of a subarray is calculated by multiplying the maximum product of the previous subarray with the current element',
    similarToProblem: 'Maximum Subarray Problem',
    tags: ['dynamic programming', 'maximum product subarray', 'array'],
    inputExample: '[-2, 3, -4]',
    outputExample: '24',
  },

  {
    statement:
      'find the minimum cost to reach from the top-left to the bottom-right of a matrix',
    description:
      'This problem involves finding the minimum cost to reach from the top-left to the bottom-right of a matrix. The cost of each cell is given and the goal is to reach the bottom-right cell with the minimum cost.',
    topicExplanation:
      'This problem is a variation of the classic dynamic programming problem, the minimum path sum. It involves finding the minimum cost to reach from the top-left to the bottom-right of a matrix. The cost of each cell is given and the goal is to reach the bottom-right cell with the minimum cost.',
    similarToProblem:
      'This problem is similar to the classic 0-1 Knapsack problem.',
    tags: ['Dynamic Programming', 'Matrix', 'Minimum Path Sum'],
    inputExample: '[[1,3,1],[1,5,1],[4,2,1]]',
    outputExample: '7',
  },

  {
    statement:
      'Find the maximum sum of a subarray with at most one element deleted',
    description:
      'Given an array of integers, find the maximum sum of a subarray with at most one element deleted',
    topicExplanation:
      'This problem can be solved using dynamic programming, where the maximum sum of a subarray is calculated for each element in the array. The maximum sum of a subarray with at most one element deleted is then the maximum of all the calculated sums',
    similarToProblem: 'This problem is similar to the maximum subarray problem',
    tags: ['dynamic programming', 'maximum subarray'],
    inputExample: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]',
    outputExample: '7',
  },

  {
    statement:
      'Find the minimum number of coins required to make a given amount of change',
    description:
      'Given a set of coins and a total amount of money, find the minimum number of coins required to make the total amount of money',
    topicExplanation:
      'This problem can be solved using a greedy algorithm, which is an algorithm that makes the best choice at each step in order to reach the desired goal',
    similarToProblem: 'Coin Change Problem',
    tags: ['greedy algorithm', 'coin change problem'],
    inputExample: 'coins = [1, 5, 10], amount = 11',
    outputExample: '3 coins (10 + 1 + 0)',
  },

  {
    statement: 'check if a given graph is bipartite',
    description:
      'A bipartite graph is a graph whose vertices can be divided into two disjoint sets U and V such that every edge connects a vertex in U to one in V.',
    topicExplanation:
      'Bipartite graphs are used to model relationships between two sets of entities. They are also used in scheduling problems, such as finding the optimal assignment of jobs to machines.',
    similarToProblem: 'Graph coloring problem',
    tags: ['graph theory', 'bipartite graph'],
    inputExample: 'A graph G with vertices V and edges E',
    outputExample: 'True or False',
  },

  {
    statement:
      'Find the maximum sum of a subarray with at most two elements reversed',
    description:
      'Given an array of integers, find the maximum sum of a subarray with at most two elements reversed',
    topicExplanation:
      "This problem can be solved using the Kadane's algorithm, which is a dynamic programming approach to finding the maximum sum of a subarray",
    similarToProblem: 'This problem is similar to the Maximum Subarray problem',
    tags: ['dynamic programming', "Kadane's algorithm"],
    inputExample: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]',
    outputExample: '7',
  },

  {
    statement:
      'Find the maximum sum subarray with at most k non-negative numbers',
    description:
      'Given an array of integers and a number k, find the maximum sum of a subarray with at most k non-negative numbers',
    topicExplanation:
      "This problem can be solved using the Kadane's algorithm, which is a dynamic programming approach to finding the maximum sum subarray",
    similarToProblem: 'This problem is similar to the maximum subarray problem',
    tags: ['dynamic programming', 'maximum sum subarray', "Kadane's algorithm"],
    inputExample: 'An array of integers and a number k',
    outputExample:
      'The maximum sum of a subarray with at most k non-negative numbers',
  },

  {
    statement:
      'Find the length of the longest consecutive subarray with at most k changes',
    description:
      'Given an array of integers and a number k, find the length of the longest consecutive subarray with at most k changes',
    topicExplanation:
      'This problem can be solved using dynamic programming, where the subproblems are the lengths of the longest consecutive subarrays with at most k changes for each index in the array',
    similarToProblem:
      'This problem is similar to the Longest Increasing Subsequence problem',
    tags: ['dynamic programming', 'array', 'subarray', 'k changes'],
    inputExample: 'An array of integers and a number k',
    outputExample:
      'The length of the longest consecutive subarray with at most k changes',
  },

  {
    statement:
      'Find the maximum sum of a subarray with at most k elements removed',
    description:
      'Given an array of integers and a number k, find the maximum sum of a subarray with at most k elements removed',
    topicExplanation:
      'This problem can be solved using the sliding window technique, which involves keeping track of the current sum of the subarray and removing elements from the left side of the window until the sum is less than or equal to k',
    similarToProblem:
      'This problem is similar to the maximum subarray problem, which involves finding the maximum sum of a subarray without any elements removed',
    tags: ['Sliding Window', 'Maximum Subarray'],
    inputExample: '[1, 2, 3, 4, 5], k = 3',
    outputExample: '12',
  },

  {
    statement:
      'Find the minimum number of coins required to make a given amount of change with a given set of coins',
    description:
      'Given a set of coins of different denominations and a total, find the minimum number of coins needed to make up that total.',
    topicExplanation:
      'This problem can be solved using a dynamic programming approach. The idea is to find the minimum number of coins needed to make up the given total using the given set of coins. This can be done by iterating through the coins and finding the minimum number of coins needed for each total.',
    similarToProblem: 'Coin Change Problem',
    tags: ['Dynamic Programming', 'Coin Change Problem'],
    inputExample: 'Set of coins: [1, 2, 5], Total: 11',
    outputExample:
      'Minimum number of coins needed: 3 (2 coins of 5 and 1 coin of 1)',
  },
  {
    statement:
      'find the minimum number of operations to convert one string to another',
    description:
      'Given two strings, find the minimum number of operations required to convert one string to the other. Operations can include insertion, deletion, and substitution of a character for another.',
    topicExplanation:
      'String manipulation algorithms are used to solve problems related to transforming strings from one form to another. This problem requires finding the minimum number of operations to convert one string to another.',
    similarToProblem: 'Edit Distance',
    tags: ['string manipulation', 'algorithms'],
    inputExample: 'String 1: abcde\nString 2: abcxy',
    outputExample:
      "Minimum number of operations: 2 (substitution of 'd' for 'x' and substitution of 'e' for 'y')",
  },

  {
    statement: 'Find the number of subarrays with a given xor',
    description:
      'Given an array of integers and a value x, find the number of subarrays having XOR of their elements as x',
    topicExplanation:
      "XOR (Exclusive OR) is a logical operation that takes two binary values as input and returns a binary value as output. It is denoted by the symbol '^'. The XOR of two binary values is 1 if the two values are different, and 0 if the two values are the same",
    similarToProblem: 'Count the number of subarrays having a given sum',
    tags: ['XOR', 'Subarrays', 'Logic'],
    inputExample: 'arr[] = {4, 2, 2, 6, 4}, x = 6',
    outputExample: '4',
  },

  {
    statement: 'check if a given graph is strongly connected',
    description:
      'A strongly connected graph is a graph in which there is a path between every pair of vertices',
    topicExplanation:
      'Strongly connected graphs are important in graph theory as they are used to represent relationships between objects',
    similarToProblem: 'Finding the strongly connected components of a graph',
    tags: ['graph theory', 'strongly connected graph'],
    inputExample: 'A graph represented as an adjacency matrix',
    outputExample: 'True or False',
  },

  {
    statement:
      'Find the maximum sum of a subarray with at most two elements swapped',
    description:
      'Given an array of integers, find the maximum sum of a subarray with at most two elements swapped',
    topicExplanation:
      'This problem can be solved using dynamic programming, where the maximum sum of a subarray is calculated for each element in the array. The maximum sum of a subarray with at most two elements swapped is then the maximum of the sums calculated for each element in the array',
    similarToProblem: 'This problem is similar to the maximum subarray problem',
    tags: ['dynamic programming', 'maximum subarray', 'subarray'],
    inputExample: '[1,2,3,4,5]',
    outputExample: '14',
  },

  {
    statement:
      'Find the maximum sum of a subarray with at most k elements replaced',
    description:
      'Given an array of integers and a number k, find the maximum sum of a subarray with at most k elements replaced by any larger number',
    topicExplanation:
      'This problem can be solved using the sliding window technique, which involves keeping track of the current sum of the subarray and replacing the elements with larger numbers if the sum is less than the maximum sum found so far',
    similarToProblem:
      'This problem is similar to the Maximum Subarray problem, which involves finding the maximum sum of a subarray without any replacements',
    tags: ['Sliding Window', 'Maximum Subarray'],
    inputExample: '[1,2,3,4,5], k = 2',
    outputExample: '17 (maximum sum of subarray [3,4,5])',
  },

  {
    statement:
      'Find the minimum number of operations to convert a binary tree to its mirror image',
    description:
      'A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. The mirror image of a binary tree is a tree in which the left and right subtrees of every node are interchanged.',
    topicExplanation:
      'Binary trees are a type of data structure used to store data in a hierarchical manner. They are often used to represent hierarchical relationships between data, such as in a family tree. The mirror image of a binary tree is a tree in which the left and right subtrees of every node are interchanged.',
    similarToProblem:
      'This problem is similar to finding the minimum number of operations to convert a binary tree to its symmetric form.',
    tags: ['binary tree', 'data structure', 'tree'],
    inputExample: 'A binary tree',
    outputExample: 'The mirror image of the binary tree',
  },

  {
    statement:
      'Find the minimum number of coins required to make a given amount of change with an unlimited supply of coins',
    description:
      'Given a set of coins of different denominations and a total, find the minimum number of coins needed to make up that total.',
    topicExplanation:
      'This problem can be solved using a greedy algorithm, which is an algorithm that makes the best choice at each step in order to reach the desired goal. In this case, the goal is to find the minimum number of coins needed to make up the given total.',
    similarToProblem:
      'This problem is similar to the Knapsack problem, which is a problem in which you must select items from a set of items to maximize the value of the items while staying within a given weight limit.',
    tags: ['greedy algorithm', 'coin change', 'knapsack problem'],
    inputExample: 'coins = [1, 5, 10, 25], total = 41',
    outputExample: '4 coins (25, 10, 5, 1)',
  },

  {
    statement:
      'Find the maximum sum of a subarray with at most k elements replaced and k elements removed',
    description:
      'Given an array of integers, find the maximum sum of a subarray with at most k elements replaced and k elements removed',
    topicExplanation:
      'This problem can be solved using dynamic programming, where the maximum sum of a subarray is calculated for each element in the array. The maximum sum of a subarray with at most k elements replaced and k elements removed is the maximum of the maximum sum of the subarrays with at most k elements replaced and k elements removed from the left and right of the current element.',
    similarToProblem:
      'This problem is similar to the Maximum Subarray Sum with K Replacements problem.',
    tags: ['dynamic programming', 'maximum subarray sum', 'k replacements'],
    inputExample: '[1, 2, 3, 4, 5], k = 2',
    outputExample: '14',
  },

  {
    statement:
      'Find the length of the longest consecutive subarray with at most k changes and at most k elements removed',
    description:
      'This problem involves finding the length of the longest consecutive subarray with at most k changes and at most k elements removed from the array',
    topicExplanation:
      'This problem involves finding the length of the longest consecutive subarray with at most k changes and at most k elements removed from the array. The changes can be either additions or deletions of elements from the array. The elements removed can be any number of elements from the array.',
    similarToProblem:
      'This problem is similar to the Longest Increasing Subsequence problem, where the goal is to find the longest increasing subsequence in an array.',
    tags: ['Dynamic Programming', 'Array'],
    inputExample: '[1,2,3,4,5,6,7,8,9] and k = 2',
    outputExample: '7',
  },

  {
    statement: 'check if a given graph is a tree',
    description:
      'A tree is a graph in which any two vertices are connected by exactly one path. A graph is a tree if it is connected and acyclic.',
    topicExplanation:
      'Graphs are a type of data structure that can be used to represent relationships between objects. Trees are a special type of graph that have certain properties.',
    similarToProblem:
      'Checking if a graph is a connected graph or a bipartite graph.',
    tags: ['graphs', 'trees', 'data structures'],
    inputExample: 'A graph represented as an adjacency list or matrix.',
    outputExample: 'True or False',
  },

  {
    statement:
      'Find the maximum sum of a subarray with at most k elements moved',
    description:
      'Given an array of integers and a number k, find the maximum sum of a subarray with at most k elements moved',
    topicExplanation:
      'This problem can be solved using the sliding window technique, which involves keeping track of the current sum of the subarray and updating it as the window moves along the array',
    similarToProblem:
      'This problem is similar to the maximum subarray problem, which involves finding the maximum sum of a subarray without any elements moved',
    tags: ['Sliding Window', 'Maximum Subarray'],
    inputExample: '[1,2,3,4,5], k = 2',
    outputExample: '14 (Subarray [3,4,5] has a maximum sum of 14)',
  },

  {
    statement:
      'Find the minimum number of edges to reverse to make a directed graph acyclic',
    description:
      'A directed graph is acyclic if there are no cycles in the graph. To make a directed graph acyclic, the minimum number of edges that need to be reversed is the number of edges in the cycle.',
    topicExplanation:
      'A directed graph is a graph in which the edges have a direction associated with them. A cycle in a directed graph is a path that starts and ends at the same vertex. To make a directed graph acyclic, the minimum number of edges that need to be reversed is the number of edges in the cycle.',
    similarToProblem:
      'Finding the number of edges in a cycle in a directed graph',
    tags: ['graph theory', 'directed graph', 'acyclic graph'],
    inputExample: 'A directed graph G',
    outputExample: 'The minimum number of edges to reverse to make G acyclic',
  },
  {
    statement:
      'Find the maximum sum of a subarray with at most k elements moved and k elements removed',
    description:
      'This problem involves finding the maximum sum of a subarray with at most k elements moved and k elements removed from the original array',
    topicExplanation:
      'This problem involves finding the maximum sum of a subarray with at most k elements moved and k elements removed from the original array. This can be done by using a dynamic programming approach, where the maximum sum of a subarray is calculated for each element in the array. The maximum sum of a subarray with at most k elements moved and k elements removed is then the maximum of all the calculated sums.',
    similarToProblem:
      'This problem is similar to the Maximum Subarray problem, where the maximum sum of a subarray is found without any elements moved or removed.',
    tags: ['dynamic programming', 'maximum subarray', 'maximum sum'],
    inputExample: '[1,2,3,4,5] and k = 2',
    outputExample:
      'The maximum sum of a subarray with at most 2 elements moved and 2 elements removed is 12.',
  },

  {
    statement:
      'Find the maximum sum of a subarray with at most k elements reversed and k elements removed',
    description:
      'This problem involves finding the maximum sum of a subarray with at most k elements reversed and k elements removed from the array',
    topicExplanation:
      'This problem involves finding the maximum sum of a subarray with at most k elements reversed and k elements removed from the array. The elements can be reversed in any order and the maximum sum of the subarray is the goal',
    similarToProblem:
      'This problem is similar to the Maximum Subarray problem, where the goal is to find the maximum sum of a subarray within an array',
    tags: [
      'maximum sum',
      'subarray',
      'k elements reversed',
      'k elements removed',
    ],
    inputExample: '[1,2,3,4,5] with k = 2',
    outputExample: 'The maximum sum of the subarray is 14',
  },

  {
    statement:
      'Find the minimum number of operations to convert an undirected graph to a directed graph',
    description:
      'An undirected graph is a graph in which edges have no orientation. A directed graph is a graph in which edges have an orientation, meaning they have a direction associated with them. The minimum number of operations to convert an undirected graph to a directed graph is the number of edges in the graph.',
    topicExplanation:
      'Graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects. Graphs are composed of vertices (or nodes) connected by edges. In an undirected graph, the edges have no orientation, while in a directed graph, the edges have an orientation, meaning they have a direction associated with them.',
    similarToProblem:
      'Finding the minimum number of operations to convert a directed graph to an undirected graph',
    tags: ['graph theory', 'directed graph', 'undirected graph'],
    inputExample: 'A graph with 5 vertices and 7 edges',
    outputExample: '7 operations',
  },

  {
    statement:
      'Calculate the minimum number of coins needed to reach a given amount',
    description:
      'This problem requires the calculation of the minimum number of coins needed to reach a given amount using coins of different denominations',
    topicExplanation:
      'This problem is related to the topic of dynamic programming, which is a method of solving complex problems by breaking them down into smaller subproblems',
    similarToProblem: 'This problem is similar to the Coin Change problem',
    tags: ['dynamic programming', 'coin change'],
    inputExample:
      'The input for this problem is an array of coin denominations and a target amount',
    outputExample:
      'The output for this problem is the minimum number of coins needed to reach the target amount',
  },

  {
    statement: 'Reverse the order of a linked list',
    description:
      'A linked list is a linear data structure where each element is a separate object. Each element (or node) of a linked list contains a data field and a reference to the next node in the list. Reversing the order of a linked list means to reverse the sequence of the nodes in the list.',
    topicExplanation:
      'Linked lists are a type of data structure that can be used to store and manipulate data. Reversing the order of a linked list involves changing the references of the nodes in the list so that the sequence of the nodes is reversed.',
    similarToProblem: 'Reversing the order of an array',
    tags: ['linked list', 'data structure', 'reverse'],
    inputExample: '[1,2,3,4,5]',
    outputExample: '[5,4,3,2,1]',
  },

  {
    statement: 'find the longest shared substring between two strings',
    description:
      'This problem requires finding the longest substring that is shared between two strings. This can be done by comparing each character in the two strings and finding the longest sequence of characters that are the same in both strings.',
    topicExplanation:
      'This problem is related to string manipulation and comparison.',
    similarToProblem:
      'This problem is similar to finding the longest common subsequence between two strings.',
    tags: ['string manipulation', 'comparison'],
    inputExample: "The input strings are 'abcd' and 'abcef'.",
    outputExample: "The longest shared substring is 'abc'.",
  },

  {
    statement: 'calculate the levenshtein distance between two strings',
    description:
      'The Levenshtein distance is a measure of the similarity between two strings, which we will refer to as the source string (s) and the target string (t). It is defined as the minimum number of single-character edits (insertions, deletions or substitutions) required to change s into t.',
    topicExplanation:
      'The Levenshtein distance is a measure of the similarity between two strings, which can be used to determine the degree of difference between two strings. It is often used in spell-checking and natural language processing applications.',
    similarToProblem: 'Finding the edit distance between two strings',
    tags: ['string comparison', 'edit distance', 'levenshtein distance'],
    inputExample: "'kitten', 'sitting'",
    outputExample: '3',
  },

  {
    statement:
      'sort the nodes of a graph in a way that respects their dependencies',
    description:
      "This problem involves sorting a graph's nodes in a way that respects the dependencies between them. This means that the order of the nodes must take into account the edges that connect them.",
    topicExplanation:
      'Graph sorting is a type of problem that involves arranging the nodes of a graph in a specific order. This order must take into account the edges that connect the nodes, as the order of the nodes must respect the dependencies between them.',
    similarToProblem:
      'This problem is similar to topological sorting, which is a type of graph sorting algorithm.',
    tags: ['graph sorting', 'topological sorting'],
    inputExample: 'A graph with nodes and edges',
    outputExample: 'A sorted list of the nodes in the graph',
  },

  {
    statement: 'Check if two strings have the same characters, ignoring order',
    description:
      'This problem requires you to compare two strings and determine if they contain the same characters, regardless of the order in which they appear',
    topicExplanation:
      'This problem can be solved by using a sorting algorithm to sort the characters in each string and then comparing the sorted strings to see if they are the same',
    similarToProblem:
      'This problem is similar to the Anagram problem, which requires you to determine if two strings are anagrams of each other',
    tags: ['string comparison', 'sorting algorithms'],
    inputExample: "'abc' and 'cba'",
    outputExample: 'True',
  },

  {
    statement: 'check if a linked list has a cycle',
    description:
      'A linked list is a data structure in which the objects are connected using pointers. A cycle in a linked list occurs when a node points back to a previous node in the list. This can cause an infinite loop if not handled properly.',
    topicExplanation:
      'Linked lists are a type of data structure that can be used to store data in a linear fashion. They are composed of nodes, which contain data and a pointer to the next node in the list. When a node points back to a previous node, it creates a cycle in the list.',
    similarToProblem:
      'Checking for a cycle in a linked list is similar to detecting a loop in a graph.',
    tags: ['linked list', 'data structure', 'cycle'],
    inputExample: 'A linked list with nodes A, B, C, D, E, F, G',
    outputExample: 'True/False depending on whether a cycle exists in the list',
  },

  {
    statement: 'traverse a graph in a breadth-first order',
    description:
      'Breadth-first traversal is a graph traversal algorithm that starts at the root node and explores all the neighboring nodes before moving to the next level neighbors.',
    topicExplanation:
      'Breadth-first traversal is a type of graph traversal algorithm that starts at the root node and explores all the neighboring nodes before moving to the next level neighbors. It is used to traverse a graph in a systematic manner and is often used in pathfinding and graph traversal.',
    similarToProblem:
      'Depth-first traversal is a similar graph traversal algorithm.',
    tags: ['graph traversal', 'breadth-first', 'pathfinding'],
    inputExample: 'A graph represented as an adjacency list',
    outputExample: 'The nodes of the graph in a breadth-first order',
  },

  {
    statement: 'check if a string has validly nested parentheses',
    description:
      'This problem requires the use of a stack to keep track of the parentheses as they are encountered in the string. If the parentheses are validly nested, the stack should be empty at the end of the string.',
    topicExplanation:
      'This problem is related to the concept of validly nested parentheses, which is a common problem in computer science.',
    similarToProblem:
      'This problem is similar to the problem of validating a string of brackets.',
    tags: ['stack', 'parentheses', 'validation'],
    inputExample: '((()))',
    outputExample: 'true',
  },
  {
    statement: 'traverse a graph in a depth-first order',
    description:
      'Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores as far as possible along each branch before backtracking.',
    topicExplanation:
      'Depth-first search is a type of traversal that explores as far as possible along each branch before backtracking and exploring the next branch. It is useful for finding paths between two nodes in a graph.',
    similarToProblem:
      'Breadth-first search is a similar algorithm that explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.',
    tags: ['graph traversal', 'depth-first search', 'DFS'],
    inputExample: 'A graph represented as an adjacency list',
    outputExample: 'The nodes of the graph in a depth-first order',
  },

  {
    statement: 'calculate the nth number in the fibonacci sequence',
    description:
      'The Fibonacci sequence is a series of numbers where a number is found by adding up the two numbers before it. Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so forth.',
    topicExplanation:
      'The Fibonacci sequence is a mathematical concept that can be used to solve a variety of problems. It is based on the idea that each number in the sequence is the sum of the two numbers before it.',
    similarToProblem:
      'Finding the nth number in the Fibonacci sequence is similar to finding the nth term in a geometric sequence.',
    tags: ['math', 'fibonacci sequence', 'nth term'],
    inputExample:
      'The input for this problem would be an integer n, representing the nth number in the Fibonacci sequence.',
    outputExample:
      'The output for this problem would be the nth number in the Fibonacci sequence.',
  },

  {
    statement: 'Check if a binary tree is sorted as a binary search tree',
    description:
      "A binary search tree is a type of binary tree in which the nodes are arranged in order, so that the left subtree of a node contains only nodes with values less than the node's value, and the right subtree of a node contains only nodes with values greater than or equal to the node's value",
    topicExplanation:
      'Binary search trees are a type of data structure that can be used to store and retrieve data quickly. They are composed of nodes, each of which contains a value and two pointers to other nodes. The left pointer points to a node with a value less than the current node, and the right pointer points to a node with a value greater than or equal to the current node',
    similarToProblem: 'Checking if a binary tree is sorted in ascending order',
    tags: ['binary tree', 'binary search tree', 'data structure'],
    inputExample: 'A binary tree',
    outputExample: 'True or False',
  },

  {
    statement: 'calculate the maximum sum of any contiguous subarray',
    description:
      'Given an array of integers, find the maximum sum of any contiguous subarray of the array',
    topicExplanation:
      "The maximum sum of any contiguous subarray is a problem that can be solved using the Kadane's algorithm",
    similarToProblem: 'Maximum Subarray Problem',
    tags: ['dynamic programming', "Kadane's algorithm"],
    inputExample: '[-2,1,-3,4,-1,2,1,-5,4]',
    outputExample: '6',
  },

  {
    statement: 'calculate the height of a binary tree',
    description:
      "The height of a binary tree is the number of edges between the tree's root node and its furthest leaf node. It can be calculated by traversing the tree and finding the maximum depth of any node in the tree.",
    topicExplanation:
      'Binary trees are a type of data structure in which each node has at most two children. The height of a binary tree is an important measure of its structure and can be used to determine the number of nodes in the tree.',
    similarToProblem: 'Finding the depth of a binary tree',
    tags: ['binary tree', 'height', 'data structure'],
    inputExample: 'A binary tree',
    outputExample: 'The height of the binary tree',
  },

  {
    statement: 'check if a graph is connected',
    description:
      'A graph is said to be connected if there is a path between every pair of vertices in the graph',
    topicExplanation:
      'Graphs are collections of objects, called vertices, connected by links, called edges. A graph is said to be connected if there is a path between every pair of vertices in the graph',
    similarToProblem: 'Checking if a graph is bipartite',
    tags: ['graphs', 'connectivity'],
    inputExample: 'A graph represented as an adjacency matrix',
    outputExample: 'True or False',
  },

  {
    statement: 'check if a string reads the same way backwards as forwards',
    description:
      'This problem involves writing a program to check if a given string reads the same way backwards as forwards',
    topicExplanation:
      'This problem involves using string manipulation techniques to compare the characters of a string from the beginning and end of the string',
    similarToProblem: 'Checking if a string is a palindrome',
    tags: ['string manipulation', 'string comparison'],
    inputExample: 'racecar',
    outputExample: 'true',
  },

  {
    statement: 'check if a graph can be divided into two groups, bipartite',
    description:
      'A bipartite graph is a graph whose vertices can be divided into two disjoint sets U and V such that every edge connects a vertex in U to one in V. A graph is bipartite if and only if it does not contain an odd-length cycle.',
    topicExplanation:
      'Bipartite graphs are used to model relationships between two sets of entities. They are often used in scheduling problems, such as finding the best way to assign jobs to workers.',
    similarToProblem: 'Finding the maximum matching in a bipartite graph',
    tags: ['graph theory', 'bipartite graph'],
    inputExample: 'A graph G with vertices V and edges E',
    outputExample:
      'A boolean value indicating whether G can be divided into two groups, U and V',
  },

  {
    statement:
      'Check if two strings are different by one edit (insertion, deletion, or substitution)',
    description:
      'This problem involves determining if two strings are different by one edit, which can be an insertion, deletion, or substitution of a character.',
    topicExplanation:
      'This problem can be solved by comparing the two strings and counting the number of differences between them. If the number of differences is one, then the strings are different by one edit.',
    similarToProblem:
      'This problem is similar to the Levenshtein Distance problem, which is used to calculate the number of edits needed to transform one string into another.',
    tags: ['string comparison', 'edits', 'Levenshtein Distance'],
    inputExample: 'The input for this problem would be two strings.',
    outputExample:
      'The output for this problem would be a boolean value indicating whether the two strings are different by one edit.',
  },

  {
    statement: 'calculate the highest total of values in a subarray',
    description:
      'This problem requires you to find the highest total of values in a given subarray',
    topicExplanation:
      'This problem involves using a loop to iterate through the subarray and find the highest total of values',
    similarToProblem: 'Finding the highest value in an array',
    tags: ['loops', 'arrays', 'subarrays'],
    inputExample: '[1,2,3,4,5]',
    outputExample: '15',
  },

  {
    statement: 'check if a string has matching parentheses',
    description:
      'This problem requires the user to check if a given string has matching parentheses, such as round brackets, square brackets, and curly braces.',
    topicExplanation:
      'This problem is related to the topic of string manipulation, which involves manipulating strings of characters to achieve a desired result.',
    similarToProblem:
      'This problem is similar to the problem of checking if a string has balanced parentheses.',
    tags: ['string manipulation', 'parentheses', 'brackets'],
    inputExample: "The input example could be a string such as '{[()]}'",
    outputExample: "The output example would be a boolean value such as 'true'",
  },

  {
    statement: 'check if two strings are one edit away',
    description:
      'This problem involves checking if two strings are one edit away from each other, meaning that one string can be transformed into the other by adding, removing, or replacing a single character.',
    topicExplanation:
      'This problem is related to the Levenshtein distance algorithm, which is used to measure the difference between two strings.',
    similarToProblem:
      'This problem is similar to the Longest Common Subsequence problem.',
    tags: ['string manipulation', 'Levenshtein distance'],
    inputExample: 'The input for this problem is two strings.',
    outputExample:
      'The output for this problem is a boolean value indicating whether or not the two strings are one edit away.',
  },
  {
    statement: 'Find the sum of all elements in a binary tree',
    description:
      'A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.',
    topicExplanation:
      'The sum of all elements in a binary tree can be calculated by traversing the tree in a depth-first manner and adding the values of each node to a running total.',
    similarToProblem:
      'This problem is similar to finding the sum of all elements in a linked list.',
    tags: ['binary tree', 'sum', 'traversal'],
    inputExample:
      'A binary tree with the following structure: \n \n  10 \n /  \\ \n5    15',
    outputExample: 'The sum of all elements in the binary tree is 30.',
  },
  {
    statement: 'Find the maximum sum of a path in a binary tree',
    description:
      'A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. The maximum sum of a path in a binary tree is the sum of the values of the nodes along the path from the root node to the leaf node with the maximum sum.',
    topicExplanation:
      'The maximum sum of a path in a binary tree can be found by traversing the tree and keeping track of the maximum sum of each path. This can be done using a depth-first search or a breadth-first search.',
    similarToProblem:
      'This problem is similar to the problem of finding the maximum sum of a path in a graph.',
    tags: ['binary tree', 'maximum sum', 'path'],
    inputExample:
      'A binary tree with the following structure: \n    10 \n   /  \\ \n  5   15 \n / \\    \\ \n2   7    20',
    outputExample:
      'The maximum sum of a path in this binary tree is 47 (10 + 15 + 20 + 2).',
  },
  {
    statement: 'Find the smallest subarray with a given sum',
    description:
      "Given an array of positive numbers and a positive number 's', find the length of the smallest contiguous subarray whose sum is greater than or equal to 's'.",
    topicExplanation:
      "This problem can be solved using a sliding window technique. The idea is to maintain a window that starts at the beginning of the array and keeps expanding until the sum of the elements in the window is greater than or equal to 's'. Once the sum is greater than or equal to 's', the window is contracted from the beginning until the sum is less than 's'. The length of the smallest window is then recorded.",
    similarToProblem:
      'This problem is similar to the Maximum Sum Subarray problem.',
    tags: ['Sliding Window', 'Array', 'Dynamic Programming'],
    inputExample: 'arr = [2, 1, 5, 2, 3, 2], s = 7',
    outputExample:
      'The smallest subarray with a sum greater than or equal to 7 is [5, 2].',
  },
  {
    statement: 'Find the maximum sum of a subarray with at most k negations',
    description:
      'Given an array of integers and a number k, find the maximum sum of a subarray with at most k negations (i.e. elements can be negated at most k times)',
    topicExplanation:
      'This problem can be solved using dynamic programming. We can keep track of the maximum sum of a subarray with at most k negations at each index in the array. We can then use this information to calculate the maximum sum of a subarray with at most k negations for the entire array.',
    similarToProblem:
      'This problem is similar to the Maximum Subarray problem, but with the additional constraint of at most k negations.',
    tags: ['dynamic programming', 'maximum subarray', 'negations'],
    inputExample: '[1, -2, 3, -4, 5], k = 2',
    outputExample: '7',
  },
  {
    statement: 'Find the minimum number of jumps to reach the end of an array',
    description:
      'Given an array of integers where each element represents the maximum number of steps that can be made forward from that element, the task is to find the minimum number of jumps to reach the end of the array (starting from the first element)',
    topicExplanation:
      'This problem can be solved using dynamic programming. The idea is to start from the first element and work your way up to the last element. At each step, you can choose the maximum number of steps that can be taken from the current element. The minimum number of jumps required to reach the end of the array is the minimum of the number of jumps required from the current element and the number of jumps required from the next element.',
    similarToProblem: 'This problem is similar to the Jump Game problem.',
    tags: ['Dynamic Programming', 'Array', 'Jumps'],
    inputExample: '[1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]',
    outputExample: '4',
  },
];
