//     statement: Find the lowest common ancestor of two nodes in a binary tree
//     description: The lowest common ancestor (LCA) of two nodes in a binary tree is the deepest node that is the ancestor of both nodes
//     inputExample: Two nodes in a binary tree

export function lowestCommonAncestor(tree, nodeA, nodeB) {
  return isIn(tree.root, nodeA, nodeB);
}

function isIn(root, a, b) {
  // 1. just returning the top, so any deeper can be true, read 2.
  if (!root) {
    return root;
  }
  // it is simply itself
  if (root.value == a.value || root.value == b.value) {
    return root;
  }

  // 2. here we are going deeper either left or right, so next root is now lext level
  let left = isIn(root.left, a, b);
  let right = isIn(root.right, a, b);
  if (left && right) {
    // so if both are in deeper, then higher- root is the common
    return root;
  }
  if (left) {
    // if it is just in left, then deeper root is the common
    return left;
  }
  if (right) {
    // if it is just in right, then deeper root is the common
    return right;
  }
  // nothing worked out
  return null;
}

/**
 * @function
 */
export function lowestCommonAncestorFast(root, p, q) {
  // basically root itself has it
  if (!root || root.value == p.value || root.value == q.value) {
    return root;
  }

  // go level deeper
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // if criteria is met
  return left && right ? root : left ? left : right ? right : null;
}

// export class LowestCommonAncestor {
//   constructor(tree, nodeA, nodeB) {
//     this.lca = null;
//     this.tree = tree;
//     this.nodeA = nodeA;
//     this.nodeB = nodeB;
//   }

//   isIn(node, a, b) {
//     //        20
//     //       /  \
//     //      10  30
//     //     /  \ / \
//     //    5  15 25 35
//     //   / \
//     //  2   7
//     //       \
//     //        8

//     if (node.value != a.value && node.value != b.value) {
//       return node;
//     }
//     if (node.value == a.value || node.value == b.value) {
//       return node;
//     }

//     let left = this.isIn(node.left);
//     let right = this.isIn(node.right);
//     if (left && right) {
//       return node;
//     }
//     if (left) {
//       return left;
//     }
//     if (right) {
//       return right;
//     }
//     return null;

//     // const left = node.left;
//     // const right = node.right;
//     // let n = node;
//     // if (left) {
//     //   if (left.value == a.value) {
//     //     n = left;
//     //   } else {
//     //     n = isIn(lef.left);
//     //   }
//     // }
//     // while we are traversing
//     // check if both conditions are met
//     // store current root
//     // continue traversing
//     // if we find met conditions, update root
//     // if traverse finished, return root that is considered common
//     // since binary tree is numeric, just check if values are in range first
//     // if largest node todo later...
//     // if (this.nodeA.value < this.nodeB.value) {
//     // }
//     // let lastRoot = tree.root;
//     // let root = lastRoot;
//     // if (this.isIn(tree.root, a, b)) {
//     //   if (this.isIn(root.left, a, b)) {
//     //     lastRoot = root.left;
//     //   }
//     //   if (this.isIn(root.right, a, b)) {
//     //     lastRoot = root.right;
//     //   }
//     //   return false;
//     // }
//     // // traverse(node)
//     // let left = node.left;
//     // let right = node.right;
//     // if (left) {
//     //   traverse(left);
//     // }
//     // if (right) {
//     //   traverse(right);
//     // }
//   }

//   //   isIn(root, nodeA, nodeB) {
//   //     return this.inRoot(root, nodeA) && this.inRoot(root, nodeB);
//   //   }

//   //   inRoot(root, node) {
//   //     if (root.value == node.value) {
//   //       return true;
//   //     }
//   //   }

//   //   isNodeInRoot(root, node) {
//   //     const left = root.left;
//   //     const right = root.right;
//   //     if (left) {
//   //       if (left.value === node.value) {
//   //         return true;
//   //       } else {
//   //         isNodeInRoot(left, node);
//   //       }
//   //     }
//   //     if (right) {
//   //       if (right.value === node.value) {
//   //         return true;
//   //       } else {
//   //         isNodeInRoot(right, node);
//   //       }
//   //     }
//   //     return false;
//   //   }

//   //   traverse(node) {
//   //     if (node) {
//   //       if (this.nodeA.value == node.left.value) {

//   //       }
//   //       this.traverse(node.left);
//   //       this.traverse(node.right);
//   //     }
//   //   }
// }
