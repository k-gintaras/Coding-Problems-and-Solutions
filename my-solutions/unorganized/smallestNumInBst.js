// statement: find the smallest element in a binary search tree
// description: A binary search tree is a type of data structure that stores data in a hierarchical manner. The smallest element in a binary search tree is the leftmost node in the tree.
// inputExample: A binary search tree
export function smallestNumInBst(bst) {
  let current = bst.root;
  let lowest = 0;
  // we assume that lowest number is left, not sure tho...
  while (current) {
    if (current.left) {
      lowest = current.left.key;
      current = current.left;
    } else {
      current = null;
    }
  }
  return lowest;
}
