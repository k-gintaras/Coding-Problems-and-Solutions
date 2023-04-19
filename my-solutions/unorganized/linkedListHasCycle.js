//     statement: check if a linked list contains a cycle
//     description: A linked list is a data structure in which the objects are connected using pointers
//  A cycle in a linked list occurs when a node points back to a previous node in the list
//  This can cause an infinite loop if not handled properly
//
//     inputExample: A linked list with nodes A, B, C, D, E, F, G

// without over complicating things, lets just do simplest case possible
// we just read about Floyd's cycle-finding algorithm
// it basically reads data twice, but it jumps ahead with the other one
// the one that jumps skips a loop, the one that doesnt, doesnt
// when both are equal, it means there was reference to previous, which is a loop

// 1 more try

export function linkedListHasCycle(linkedList) {
  let tortoise = linkedList.head;
  let rabbit = linkedList.head.next;
  // so we can keep jumping ahead
  while (rabbit && rabbit.next) {
    if (rabbit.data == tortoise.data) {
      console.log(rabbit);
      console.log(tortoise);
    }
    if (rabbit == tortoise) {
      return true;
    }
    tortoise = tortoise.next;
    rabbit = rabbit.next.next; // jump twice
  }
  return false;
}

// export function linkedListHasCycle(linkedList) {
//   let tortoise = linkedList.head;
//   let rabbit = linkedList.head.next;
//   while (rabbit && rabbit.next) {
//     if (tortoise == rabbit) {
//       return true;
//     }
//     tortoise = tortoise.next;
//     rabbit = rabbit.next.next;
//   }
//   return false;
// }
