//     statement: find the number of elements in a linked list
//     description: This problem requires you to traverse a linked list and count the number of elements in it
//
//     inputExample: A linked list with the following elements: 1 -> 2 -> 3 -> 4 -> 5

export function linkedListSize(linkedList) {
  let element = linkedList.head;
  let count = 0;
  while (element) {
    element = element.next;
    count++;
  }
  return count;
}
