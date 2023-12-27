// constructBST;
//     statement: Construct a binary search tree from a given array
//     description: A binary search tree is a type of data structure that stores data in a hierarchical structure
//  It is composed of nodes, each of which stores a single item of data and also links to up to two other nodes (known as the left and right child nodes)
//  The data stored in each node must be greater than the data stored in its left child node and less than the data stored in its right child node
//  To construct a binary search tree from a given array, the array must be sorted in ascending order and then each element of the array is inserted into the tree in order
//  The left child node of a node is the node that stores the next smallest element in the array and the right child node is the node that stores the next largest element in the array
//
//     inputExample: [1, 3, 5, 7, 9]

export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export function constructBST(arr) {
  const root = new TreeNode(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    insertToBST(root, val);
  }

  console.log(JSON.stringify(root, null, 2));
}

export function insertToBST(node, value) {
  if (value > node.value) {
    if (!node.right) {
      node.right = new TreeNode(value);
    } else {
      insertToBST(node.right, value);
    }
  }
  if (value < node.value) {
    if (!node.left) {
      node.left = new TreeNode(value);
    } else {
      insertToBST(node.left, value);
    }
  }
}
