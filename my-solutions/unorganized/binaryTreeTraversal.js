export class BinaryTreeTraversal {
  constructor() {}

  getInOrder(tree) {
    this.data = [];
    this.inOrder(tree.root);
    return this.getData();
  }
  getPreOrder(tree) {
    this.data = [];
    this.preOrder(tree.root);
    return this.getData();
  }
  getPostOrder(tree) {
    this.data = [];
    this.postOrder(tree.root);
    return this.getData();
  }

  // left, top, right
  // store or display in between left and right
  // result that is basically sorted array
  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      this.storeValue(node.value);
      this.inOrder(node.right);
    }
  }

  // top, left, right
  // store or display before left and right
  preOrder(node) {
    if (node) {
      this.storeValue(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // left, right, top
  // store or display after left and right
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.storeValue(node.value);
    }
  }

  storeValue(data) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
}
