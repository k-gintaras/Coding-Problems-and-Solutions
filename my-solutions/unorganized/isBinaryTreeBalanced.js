//     statement: Check if a binary tree is balanced
//     description: A binary tree is said to be balanced if the difference between the heights of the left and right subtrees of every node is not more than 1
//     inputExample: A binary tree

export function isBinaryTreeBalanced(tree) {
  //  probably have to use recursion

  const root = tree.root;

  const isBalanced = balanced(root);
  return isBalanced;
}

function balanced(node) {
  if (!node) {
    return true;
  }
  let leftHeight = height(node.left);
  let rightHeight = height(node.right);
  const isBalanced = Math.abs(leftHeight - rightHeight) < 2;
  if (isBalanced) {
    return balanced(node.left) && balanced(node.right);
  }
  return false;
}
// function balanced(node) {
//   // balanced if the
//   // isBalanced()
//   // difference between the heights of the left and right subtrees of every node is not more than 1
//   // let leftSubtreeHeight=0
//   // let rightSubtreeHeight=0
//   // const isBalanced=Math.abs(leftSubtreeHeight-rightSubtreeHeight)<2;
//   // repeat for every node
//   if (!node) {
//     return true;
//   }
//   let leftHeight = height(node.left);
//   let rightHeight = height(node.right);
//   const isBalanced = Math.abs(leftHeight - rightHeight) < 2;
//   if (isBalanced) {
//     return balanced(node.left) && balanced(node.right);
//   }
//   return false;
// }

/**
 * Calculate height of left and right subtrees
 * Take the maximum of two heights
 * Add 1 for the current node
 */
function height(node) {
  if (!node) {
    return 0;
  }
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function beautiful(node) {
  // if this exists in any form then we can check if it is balanced

  // if left and right like these:

  // isNodeEmpty
  // true
  // node
  // - -

  if (!node) {
    return true;
  }

  // isNodeBalancedTree
  // true
  //         node
  //    left      right
  // left right left right

  if (isTreeBeautiful(node)) {
    console.log('balanced 1st');
    if (node.left && node.right) {
      if (isTreeBeautiful(node.left) && isTreeBeautiful(node.right)) {
        return true;
      }
    }
  }
  // false, beause right has none
  //         node
  //    left      right
  // left
  // true, because right of that can be left of the other
  //         node
  //    left      right
  //         right

  // any can be missing but the leftest left or rightest right
  // or if there is missing 3, then left rigght or right left must be up

  return false;
}

// will not work on bigger trees because there can be move zigzag stuff
// must use height idea to solve this
function isTreeBeautiful(node) {
  const left = node.left;
  const right = node.right;

  const ll = left.left;
  const lr = left.right;
  const rl = right.left;
  const rr = right.right;

  // all can be missing
  // 3 can be missing but not lr or rl, if left right or right left missing, then others must be present
  // if above ok, the rest obvious
  // any 2 can be missing...
  // any 1 can be missing
  // all can be present

  if (!ll && !lr && !rl && !rr) {
    // just left and right with no leaves
    return true;
  }
  // if both mid point missing, then others must be present
  if (isMissingThree(ll, lr, rl, rr)) {
    // one of mid must be present
    if (!lr || !rl) {
      return false;
    }
  }
  return true;
}

function isMissingThree(ll, lr, rl, rr) {
  if (!lr && !rl && !rr) {
    return true;
  }
  if (!ll && !rl && !rr) {
    return true;
  }
  if (!ll && !lr && !rr) {
    return true;
  }
  if (!ll && !lr && !rl) {
    return true;
  }
}

function hasLeaves(node) {
  return node && (node.left || node.right);
}

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
//
// balanced
//        15
//       /  \
//      10   20
//     / \
//    8  12
//
//        15
//       /  \
//      10   20
//     /
//    8
//
//        15
//       /  \
//      10   20
//       \
//        12
