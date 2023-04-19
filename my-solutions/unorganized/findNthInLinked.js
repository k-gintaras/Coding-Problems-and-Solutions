//     statement: find the nth element of a linked list
//     description: Given a linked list, find the nth element from the end of the list
//     inputExample: A linked list with 5 elements

// for some reason this is considered wrong, because it reads from start of the list
export function findNthInLinkedFromStart(n, linkedList) {
  let element = linkedList.head;
  let count = 0;
  while (element) {
    if (count === n) {
      return element;
    }
    element = element.next;
    count++;
  }
  return null;
}

// after struggling for centuries to understand this nonsense
// of reading from the back
// i finally got it
// you basically iterate until counter is reached, then
// start iterating the copy, to get (length-counter)
// which will lead to kinda like counting from the back
// but not really actually reading from the back
export function findNthInLinked(n, linkedList) {
  let element = linkedList.head;
  let reader = linkedList.head;
  let count = 0;

  while (reader) {
    // once we past the counter
    // means we will traverse (length - counter) elements
    // which will basically mean count from the back
    if (count >= n) {
      element = element.next;
    }
    reader = reader.next; // here we just traverse
    count++; // we pretend we counting from the back, so the if starts after counting the rest
  }
  return element;
}
