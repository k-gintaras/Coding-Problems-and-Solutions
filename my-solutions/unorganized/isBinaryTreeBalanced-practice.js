// if i remember right
// node level height difference not more than 1 || <2
// check every node leafs recursively
// check height of each deep down recursively
// if no node it is balanced and also good exit from recursion
// if any not balanced, also good exit
// height is the heighest height of either left or right +1

export function isBalanced(tree) {
  const node = tree.root;
  return balanced(node);
}

function height(node) {
  if (!node) {
    return 0;
  }
  return Math.max(height(node.left), height(node.right)) + 1;
}

function balanced(node) {
  if (!node) {
    return true;
  }
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  if (Math.abs(leftHeight - rightHeight) < 2) {
    return balanced(node.left) && balanced(node.right);
  }
  return false;
}
