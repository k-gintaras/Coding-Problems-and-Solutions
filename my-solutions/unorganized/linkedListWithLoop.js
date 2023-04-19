export class LinkedListWithLoop {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // seems like simplest solution is just to cause loop at the end
  // otherwise you have to make some kind of mad triangles or stuff
  fill(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.add(arr[i]);
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    this.tail.next = this.getNode(randomIndex);
  }

  getNode(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
