//     statement: check if two rectangles overlap
//     description: This problem involves determining whether two rectangles overlap or not
//  The input will be the coordinates of the two rectangles and the output will be a boolean value indicating whether the rectangles overlap or not
//
//     inputExample: The input will be the coordinates of the two rectangles in the form of (x1, y1, x2, y2) for the first rectangle and (x3, y3, x4, y4) for the second rectangle
//

// a: {
//   bottomLeft: { x: 0, y: 0 },
//   topRight: { x: 4, y: 4 },
// },
// b: {
//   bottomLeft: { x: 2, y: 2 },
//   topRight: { x: 6, y: 6 },
// },
export function rectangleOverlap(r1, r2) {
  return isThereOverlap(r1, r2);
}

function isThereOverlap(r1, r2) {
  if (r1.bottomLeft.x > r2.topRight.x || r2.bottomLeft.x > r1.topRight.x) {
    return false;
  }
  if (r1.bottomLeft.y > r2.topRight.y || r2.bottomLeft.y > r1.topRight.y) {
    return false;
  }
  return true;
}
