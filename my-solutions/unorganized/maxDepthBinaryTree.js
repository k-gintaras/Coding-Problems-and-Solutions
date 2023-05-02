//     statement: find the maximum depth of a binary tree
//     description: The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node
//
//     inputExample: A binary tree

export function maxDepthBinaryTree(tree) {
  // number of nodes along the longest path from the root node down to the farthest leaf node
  // depth first search?

  return height(tree.root);
}

function height(node) {
  if (!node) {
    return 0;
  }
  const heightLeft = height(node.left);
  const heightRight = height(node.right);
  return Math.max(heightLeft, heightRight) + 1;
}
