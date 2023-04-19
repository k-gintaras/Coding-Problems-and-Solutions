//     statement: find the middle element of a linked list
//     description: A linked list is a linear data structure where each element is a separate object
//  To find the middle element of a linked list, traverse the list and count the number of nodes
//  If the number of nodes is even, then the middle element is the node at the center of the list
//  If the number of nodes is odd, then the middle element is the node at the center of the list plus one
//
//     inputExample: [1,2,3,4,5]

export function findMiddleInLinked(linkedList) {
  // while traversing you count
  // then traverse again and return item
  // even is the mid
  // odd is the mid+1

  // so we dont need to traverse again we put it in hashmap
  let count = 0;
  let current = linkedList.head;
  const hashMap = { count: current };

  while (current) {
    count++;
    if (current.next) {
      current = current.next;
      hashMap[count] = current;
    } else {
      current = null;
    }
  }

  let mid = Math.floor(count / 2);
  const isEven = count % 2 === 0;
  if (!isEven) {
    mid = mid + 1;
  }

  console.log(count);

  return hashMap[mid - 1];
}
