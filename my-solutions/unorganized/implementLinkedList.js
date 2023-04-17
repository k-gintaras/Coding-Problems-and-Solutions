// statement: implement a linked list
// description: A linked list is a linear data structure,
// in which the elements are not stored at contiguous memory locations.
// The elements in a linked list are linked using pointers.
// Each element of a list is stored in the form of a node, which contains two fields - data and a pointer to the next node in the list.
// inputExample: A linked list can be initialized with a given set of values.

// attempt number 3, just practicing, using what I remember, trying not to scroll down

export { Linkedlist };

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // insertion
  add(data) {
    const node = new ListNode(data);
    // use the tail after head is sorted
    if (!this.head) {
      this.head = node;
    } else {
      // add to last link/ next
      this.tail.next = node;
    }
    // keep last item on record
    this.tail = node;
  }
  // traversal
  get() {
    // use head
    const arr = [];
    let node = this.head;

    // there was a mistake here, i was checking for if .next exists, but it does not read
    // last data, so i have to check if node exists, not if node next exists
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// test3();
function test3() {
  const l = new Linkedlist();
  const test = ['a', 'b', 'c', 2, 3, 1, 4, 'adwda'];
  for (let i = 0; i < test.length; i++) {
    const n = test[i];
    l.add(n);
  }
  console.log(l.get());
}

// attempt number 2, no help, but I read about linked list online

// linked list has head tail and nodes with data and (link to next data, which is basically data)
// from what i learned, you need tail update, so you can always add to its end where node link to next data is null
// there is 2 algorithms to be done for list, traversal and insertion
// there is 2 structures, node and list, list contains nodes, list has head and tail
// tail always has node and head is basically just data (if I understood right)

// in js to make class for objects: class name{constructor(a){this.a=a} functionName(){}}

class MyNode {
  constructor(data) {
    this.data = data;
    this.link = null;
  }
}

// next time i do it, basically head, tail and tail.next is newNode each time, without even thinking much about it
// i could not understand why would you put node into head, when head is just beginning of a list like array
// so i put just data in it, as it is just first value
// overwriting the tail each time and just entering last value
// while really, the head contains the whole thing and tail just lets you keep track of it
class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // insert
  add(data) {
    // no head, new list
    const newNode = new MyNode(data);
    if (!this.head) {
      this.head = newNode; // biggest mistake was here, this is where all the data is stored, not just the first data entry
      // it will have data twice on first go, but it seems to be simpler that way
    } else {
      //   // list already has head
      //   // add new node to the link
      //   const oldNodes = this.tail;
      //   oldNodes.link = newNode;
      //   // keep the latest node with empty link in the tail
      //   this.tail = oldNodes;

      //   // there lies a mistake we named our link as a next... whooops
      // mistake was also because we did not set head as first object to store whole thing there

      this.tail.link = newNode;
    }
    this.tail = newNode;
  }

  // traverse
  get() {
    const allData = [];
    // the list is basically   node(data,node(data,node(data,node(data,node(data,null)))))
    // go deep until node link is empty
    allData.push(this.head);
    // cant for loop as unknown size, so while()...
    let isWithLink = this.tail != null;
    let currentNode = this.head;
    while (isWithLink) {
      const node = currentNode;
      const data = node.data;
      // next node
      currentNode = node.link;
      allData.push(data);
      // what to do with the tail being the same? how to do deeper?
      // variable outside?
      isWithLink = node.link;
    }
    return allData;
  }
}

// testMyLinkedList();
function testMyLinkedList() {
  const testData = ['a', 'b', 1, 2, 3, 4, 1, 4, 7];
  const list = new MyLinkedList();
  for (let i = 0; i < testData.length; i++) {
    const element = testData[i];
    list.add(element);
  }

  console.log(list);

  const arr = list.get();

  console.log(arr);
}

// the below is solution with assistance of gpt as I had no clue how to do it
const testInput = [5, 1, 3, 5, 1, 5, 2];
function implementLinkedList(input) {
  // if i remember right it is basically like a value pair of value and address to next value?
  // reading description...
  // imagine node, it has address, value, pointer to next value
  // linked lists basically allow more flexible memory management
  // efficient insertion and deletion
  // list items are called nodes
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  getLinkedList() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    return list;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// test();

function test() {
  const linkedList = new LinkedList();
  for (let i = 0; i < testInput.length; i++) {
    const element = testInput[i];
    linkedList.addToTail(element);
  }
  console.log(linkedList.getLinkedList());
}

// TODO: what linked lists are good for, efficient insertion and deletion.
// what are they usally used for, stacks queues, graphs
