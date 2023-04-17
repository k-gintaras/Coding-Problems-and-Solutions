export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  fill(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.add(arr[i]);
    }
  }
  add(data) {
    const node = new Node(data);
    if (!this.head) {
      // whole structure is inside head
      this.head = node;
    } else {
      this.tail.next = node; // link a next node into last node
    }
    this.tail = node; // last item, to keep adding node to the last added one
  }
  get() {
    const arr = [];

    let node = this.head; // whole list is in head
    while (node) {
      // as long as there is something in next link
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // where we put next link to next node with data
  }
}
