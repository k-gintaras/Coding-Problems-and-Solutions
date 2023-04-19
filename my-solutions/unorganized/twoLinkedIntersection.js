//     statement: find the intersection of two linked lists
//     description: This problem involves finding the node at which the intersection of two singly linked lists begins
//  This can be done by comparing the nodes of each list and finding the first node that is the same in both lists
//
//     inputExample: Two linked lists, each with a head node

// inneficient way
export function twoLinkedIntersectionSlow(linkedListA, linkedListB) {
  let elementA = linkedListA.head;
  let elementB = linkedListB.head;

  if (elementA == elementB) {
    // lists are same
    return elementA;
  }

  while (elementA) {
    while (elementB) {
      if (elementA.data === elementB.data) {
        return elementA;
      }
      elementB = elementB.next;
    }
    elementA = elementA.next;
    elementB = linkedListB.head;
  }
  return null;
}

// bit faster
export function twoLinkedIntersection(linkedListA, linkedListB) {
  let elementA = linkedListA.head;
  let elementB = linkedListB.head;
  const hashMap = {};
  // iterate one and make unique list, i.e. hashmap
  // iterate second one and see if it is in map
  while (elementA) {
    hashMap[elementA.data] = elementA;
    elementA = elementA.next;
  }

  while (elementB) {
    const data = elementB.data;
    if (hashMap[data]) {
      return hashMap[data];
    }
    elementB = elementB.next;
  }

  return null;
}
