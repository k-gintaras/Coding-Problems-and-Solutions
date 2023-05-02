//     statement: traverse a binary tree in pre-order
//     description: Traversing a binary tree in pre-order means to visit the root node first, then traverse the left subtree, followed by the right subtree
//
//     inputExample: A binary tree represented as an array
// there is three ways
// inorder left root right
// preorder root left right
// postorder left right root
/**
 * @function
 * @argument dataKey whether tree uses node.value or node.key or node.data, put value,key,data
 */
export function traverseInPreorder(tree, dataKey) {
  const node = tree.root;
  const preorder = new BinaryPreorder(dataKey);
  preorder.preOrderVisit(node);
  return preorder.getData();
}

export class BinaryPreorder {
  constructor(dataKey) {
    this.data = [];
    this.key = dataKey;
  }

  preOrderVisit(node) {
    if (node) {
      this.storeValue(node[this.key]);
      this.preOrderVisit(node.left);
      this.preOrderVisit(node.right);
    }
  }

  storeValue(data) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
}
