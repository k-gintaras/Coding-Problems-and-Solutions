export const rectangles = [
  {
    a: {
      bottomLeft: { x: 0, y: 0 },
      topRight: { x: 4, y: 4 },
    },
    b: {
      bottomLeft: { x: 2, y: 2 },
      topRight: { x: 6, y: 6 },
    },
  },
  {
    a: {
      bottomLeft: { x: 1, y: 1 },
      topRight: { x: 5, y: 5 },
    },
    b: {
      bottomLeft: { x: 4, y: 4 },
      topRight: { x: 8, y: 8 },
    },
  },
  {
    a: {
      bottomLeft: { x: 0, y: 0 },
      topRight: { x: 3, y: 3 },
    },
    b: {
      bottomLeft: { x: 5, y: 5 },
      topRight: { x: 9, y: 9 },
    },
  },
  {
    a: {
      bottomLeft: { x: 2, y: 2 },
      topRight: { x: 6, y: 6 },
    },
    b: {
      bottomLeft: { x: 3, y: 3 },
      topRight: { x: 7, y: 7 },
    },
  },
];

// counting shortest paths on unweighted graphs
// 0---1
// |   |
// |   |
// 3---2
// |
// |
// 4
export const uGraph1 = {
  0: [1, 3],
  1: [0, 2],
  2: [1, 3],
  3: [0, 2, 4],
  4: [3],
};

//   0
//   |
//   1---2
//   |
//   3
//  / \
// 4   5
export const uGraph2 = {
  0: [1],
  1: [0, 2, 3],
  2: [1],
  3: [1, 4, 5],
  4: [3],
  5: [3],
};

//   1
//   |
// 0-2-3---4---5---6
//   |
//   3
export const uGraph3 = {
  0: [1, 2, 3],
  1: [0],
  2: [0],
  3: [0, 4],
  4: [3, 5],
  5: [4, 6],
  6: [5],
};

export const uGraphs = [uGraph1, uGraph2, uGraph3];
export function getUnweightedGraphs() {
  return uGraphs;
}

// counting connected components:
// Expected output: 2 connected components
export const graph1 = {
  0: [1, 2],
  1: [0, 3],
  2: [0],
  3: [1],
  4: [5],
  5: [4],
};
// Expected output: 3 connected components

export const graph2 = {
  0: [1],
  1: [0, 2],
  2: [1],
  3: [4],
  4: [3],
  5: [],
};

// Expected output: 2 connected components
export const graph3 = {
  0: [1, 3],
  1: [0, 2],
  2: [1, 3],
  3: [0, 2, 4],
  4: [3, 5, 6],
  5: [4],
  6: [4],
  7: [8],
  8: [7, 9],
  9: [8],
};

// Expected output: 4 connected components
export const graph4 = {
  0: [1],
  1: [0],
  2: [3, 4],
  3: [2],
  4: [2],
  5: [6],
  6: [5],
  7: [],
};

export const graphs = [graph1, graph2, graph3, graph4];
export const graphAns = [2, 3, 2, 4];

//      10
//    /    \
//   5      15
//  / \    /  \
// 3   7  12  20
export const balancedTree1 = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
  right: {
    value: 15,
    left: {
      value: 12,
      left: null,
      right: null,
    },
    right: {
      value: 20,
      left: null,
      right: null,
    },
  },
};

//     7
//    / \
//   4  10
//  / \ / \
// 2  6 8 12
//        \
//        15
export const balancedTree2 = {
  value: 7,
  left: {
    value: 4,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: null,
      right: null,
    },
  },
  right: {
    value: 10,
    left: {
      value: 8,
      left: null,
      right: null,
    },
    right: {
      value: 12,
      left: null,
      right: {
        value: 15,
        left: null,
        right: null,
      },
    },
  },
};

//        20
//       /  \
//      10  30
//     /  \ / \
//    5  15 25 35
//   / \
//  2   7
export const balancedTree3 = {
  value: 20,
  left: {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
    right: {
      value: 15,
      left: null,
      right: null,
    },
  },
  right: {
    value: 30,
    left: {
      value: 25,
      left: null,
      right: null,
    },
    right: {
      value: 35,
      left: null,
      right: null,
    },
  },
};

//      50
//     /  \
//   25   75
//  /  \   / \
// 10  35 65 85
//     / \
//    30 40
export const balancedTree4 = {
  value: 50,
  left: {
    value: 25,
    left: {
      value: 10,
      left: null,
      right: null,
    },
    right: {
      value: 35,
      left: {
        value: 30,
        left: null,
        right: null,
      },
      right: {
        value: 40,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 75,
    left: {
      value: 65,
      left: null,
      right: {
        value: 70,
        left: null,
        right: null,
      },
    },
    right: {
      value: 85,
      left: null,
      right: null,
    },
  },
};

// 10
//   \
//    15
//      \
//       20
const unbalancedTree1 = {
  value: 10,
  right: {
    value: 15,
    right: {
      value: 20,
      left: null,
      right: null,
    },
    left: null,
  },
  left: null,
};

// 5
//  \
//   20
//  /  \
// 10  30
//       \
//        40
const unbalancedTree2 = {
  value: 5,
  right: {
    value: 20,
    right: {
      value: 30,
      right: {
        value: 40,
        left: null,
        right: null,
      },
      left: null,
    },
    left: {
      value: 10,
      left: null,
      right: null,
    },
  },
  left: null,
};

//     15
//    /   \
//   10   20
//  /  \
// 5    13
//     /
//    12
const unbalancedTree3 = {
  value: 15,
  right: {
    value: 20,
    left: null,
    right: null,
  },
  left: {
    value: 10,
    right: {
      value: 13,
      left: {
        value: 12,
        left: null,
        right: null,
      },
      right: null,
    },
    left: {
      value: 5,
      left: null,
      right: null,
    },
  },
};

export const balancedTrees = [
  balancedTree1,
  balancedTree2,
  balancedTree3,
  balancedTree4,
];

export const unbalancedTrees = [
  unbalancedTree1,
  unbalancedTree2,
  unbalancedTree3,
];

export const allTrees = balancedTrees.concat(unbalancedTrees);

export const array1 = [
  1,
  `hello`,
  true,
  null,
  undefined,
  { name: 'John', age: 30 },
  [1, 2, 3],
  new Date(),
  function () {
    console.log('Function inside array');
  },
  NaN,
];

export const array2 = [
  { id: 1, name: 'apple', price: 2.5 },
  'banana',
  5,
  false,
  'orange',
  null,
  undefined,
  [4, 5, 8],
  function (a, b) {
    return a + b;
  },
  true,
];

export const array3 = [
  new Date(),
  'world',
  function () {
    console.log('Function inside array');
  },
  3,
  ['a', 'b', 'c'],
  8,
  true,
  null,
  { id: 2, name: 'orange', price: 3.5 },
  NaN,
];

export const array4 = [
  1,
  'hello',
  2,
  'world',
  3,
  '!',
  'four',
  'five',
  6,
  'seven',
];

export const array5 = [
  'apple',
  'orange',
  'banana',
  'pear',
  'grape',
  'lemon',
  'cherry',
  'kiwi',
  'strawberry',
  'watermelon',
];

export const array6 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const array7 = [83, 42, 92, 19, 54, 69, 71, 37, 2, 99];

export function getAllArrays() {
  return [array1, array2, array3, array4, array5, array6, array7];
}

export function getHardArrays() {
  return [array1, array2, array3];
}

export function getEasyArrays() {
  return [array4, array5, array6, array7];
}

export function getTextArray() {
  return array5;
}

export function getSortedNumericArray() {
  return array6;
}

/**
 * @function
 * @returns [83, 42, 92, 19, 54, 69, 71, 37, 2, 99]
 */
export function getNumericArray() {
  return array7;
}

export function getRandomArray() {
  const randomArray = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
  }
  return randomArray;
}
export function getBalancedTrees() {
  return balancedTrees;
}
export function getUnbalancedTrees() {
  return unbalancedTrees;
}
export function getAllTrees() {
  return allTrees;
}

export function getGraphs() {
  return graphs;
}
export function getGraphAns() {
  return graphAns;
}

// import {getAllArrays,getHardArrays,getEasyArrays,getTextArray,getSortedNumericArray,getNumericArray,getRandomArray} from './testData.js'
