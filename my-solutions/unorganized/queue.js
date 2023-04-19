// statement: implement a queue
// description: A queue is a data structure that follows the First In First Out (FIFO) principle.
// It is used to store data in a linear fashion, where the first element added is the first one to be removed.
// inputExample: Enqueue(5)

export class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(data) {
    this.data.unshift(data);
  }
  dequeue() {
    const last = this.data.length - 1;
    const dequeued = this.data[last];
    this.data = this.data.slice(0, last);
    return dequeued;
  }
  get() {
    return this.data;
  }
}
