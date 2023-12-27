// postOrderTraversalBST;
//     statement: Reconstruct a binary search tree from its postorder traversal
//     description: A binary search tree is a type of tree data structure in which each node has at most two children, and all left descendants of a node are less than the node and all right descendants are greater than the node
//  Postorder traversal is a type of tree traversal in which the left subtree is visited first, then the right subtree, and finally the root node
//  Reconstructing a binary search tree from its postorder traversal involves creating a binary search tree from the given postorder traversal sequence
//
//     inputExample: A postorder traversal sequence of a binary search tree

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
export function postOrderTraversalBST(arr) {
  // post order= left right root
  const root = new TreeNode(arr[arr.length - 1]); // last value is root
  for (let i = arr.length - 2; i >= 0; i--) {
    // don't include last
    const val = arr[i];
    postOrderInsert(root, val);
  }
  console.log(JSON.stringify(root, null, 2));
  return root;
}

function postOrderInsert(node, val) {
  if (val > node.value) {
    // insert right first
    if (!node.right) {
      node.right = new TreeNode(val);
    } else {
      postOrderInsert(node.right, val);
    }
  } else {
    if (!node.left) {
      node.left = new TreeNode(val);
    } else {
      postOrderInsert(node.left, val);
    }
  }
}
