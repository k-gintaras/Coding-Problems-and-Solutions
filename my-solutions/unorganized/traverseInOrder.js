//     statement: traverse a binary tree in in-order
//     description: In-order traversal of a binary tree is a type of tree traversal in which the left subtree of a node is visited first, then the node itself, and then the right subtree
//
//     inputExample: A binary tree
// there is three ways
// inorder left root right
// preorder root left right
// postorder left right root
/**
 * @function
 * @argument dataKey whether tree uses node.value or node.key or node.data, put value,key,data
 */
export function traverseInOrder(tree, dataKey) {
  const node = tree.root;
  const preorder = new BinaryInOrder(dataKey);
  preorder.inOrder(node);
  return preorder.getData();
}

export class BinaryInOrder {
  constructor(dataKey) {
    this.data = [];
    this.key = dataKey;
  }

  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      this.storeValue(node[this.key]);
      this.inOrder(node.right);
    }
  }

  storeValue(data) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
}
