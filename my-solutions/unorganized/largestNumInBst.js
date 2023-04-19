// statement: find the largest element in a binary search tree
// description: The largest element in a binary search tree is the rightmost node in the tree. To find it, start at the root node and traverse down the right subtree until you reach a leaf node. The value of the leaf node is the largest element in the tree.
// inputExample: A binary search tree

export function largestNumInBst(bst) {
  // we not sure what we get with bst, assume that we get passed bst.root
  let current = bst.root;
  let largest = 0;
  while (current) {
    if (current.right) {
      largest = current.right.key;
      current = current.right;
    } else {
      current = null; // no more rights left
    }
  }
  return largest;
}
