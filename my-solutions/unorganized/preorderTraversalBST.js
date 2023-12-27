// title: 'preorderTraversalBST',
// problem: 'Reconstruct a binary search tree from its preorder traversal',

//     statement: Reconstruct a binary search tree from its preorder traversal
//     description: A binary search tree is a type of tree in which each node has at most two children, and all left descendants are less than the parent node, and all right descendants are greater than the parent node
//  Preorder traversal is a type of tree traversal in which the root node is visited first, followed by the left subtree, and then the right subtree
//  Reconstructing a binary search tree from its preorder traversal involves creating a binary search tree from the given preorder traversal sequence
//
//     inputExample: A preorder traversal sequence of a binary search tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function preorderTraversalBST(arr) {
  const root = new TreeNode(arr[0]); // preorder= root, left, right, so array first value is root
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    addValueBST(root, val);
  }
}

// preorder insert is basically same as normal insert
function addValueBST(node, val) {
  if (val < node.value) {
    if (!node.left) {
      node.left = new TreeNode(val);
    } else {
      addValueBST(node.left, val);
    }
  } else {
    if (!node.right) {
      node.right = new TreeNode(val);
    } else {
      addValueBST(node.right, val);
    }
  }
}
