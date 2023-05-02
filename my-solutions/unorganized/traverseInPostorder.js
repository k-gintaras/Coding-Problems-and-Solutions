//     statement: traverse a binary tree in post-order
//     description: Traversing a binary tree in post-order means to traverse the left subtree, then the right subtree, and finally the root node of the tree
//
//     inputExample: A binary tree
// inorder from left to top to right
// preorder from top to bottom left right
// postorder, from bottom to top left right

/**
 * @function
 * @argument dataKey whether tree uses node.value or node.key or node.data, put value,key,data
 */
export function traverseInPostorder(tree, dataKey) {
  const node = tree.root;
  const p = new BinaryPostorder(dataKey);
  p.postOrder(node);
  return p.getData();
}

export class BinaryPostorder {
  constructor(dataKey) {
    this.key = dataKey;
    this.data = [];
  }

  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.storeData(node);
    }
  }
  //   postOrder(node) {
  //     if (node) {
  //       if (!node.left) {
  //         this.storeData(node);
  //       } else {
  //         this.postOrder(node.left);
  //       }
  //       if (!node.right) {
  //         this.storeData(node);
  //       } else {
  //         this.postOrder(node.right);
  //       }
  //     }
  //   }

  storeData(node) {
    this.data.push(node[this.key]);
  }

  getData() {
    return this.data;
  }
}
