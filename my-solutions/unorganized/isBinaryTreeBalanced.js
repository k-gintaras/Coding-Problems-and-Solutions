//     statement: Check if a binary tree is balanced
//     description: A binary tree is said to be balanced if the difference between the heights of the left and right subtrees of every node is not more than 1
//     inputExample: A binary tree

export function isBinaryTreeBalanced(tree) {
  //  probably have to use recursion
  const root = tree.root;

  const isBalanced = balanced(root.left, root.right);
}

// function balanced(left, right) {
//   if (left && right) {
//     const leftBalance = balanced(left.left, left.right);
//     const rightBalance = balanced(right.left, right.right);
//     return leftBalance && rightBalance;
//   } else {
//     return false;
//   }
// }

// balanced
//      10
//     /  \
//    6    13
//   / \   /
//  5   8 11
// balanced
//       20
//      /  \
//    15   25
//   /  \    \
//  10  18   30
// balanced
//        15
//       /  \
//      10   20
//     / \
//    8  12
