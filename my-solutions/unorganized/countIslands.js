//     statement: find the number of islands in a 2d grid
//     description: A 2D grid is a rectangular arrangement of cells in a grid
//  Each cell can either be empty or contain an island
//  The task is to find the number of islands in the grid
//
//     inputExample: [[1,1,0,0,0], [0,1,0,0,1], [1,0,0,1,1], [0,0,0,0,0]]

//  first attempt, assumed it wrong, that it can be solved by dynamic programming
export function countIslandsSimple(mapMatrix) {
  const countMatrix = [];
  const h = mapMatrix.length;
  const w = mapMatrix[0].length;

  // + 0th row
  for (let i = 0; i <= h; i++) {
    const row = new Array(w + 1).fill(0);
    countMatrix.push(row);
  }

  let counter = 0;
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      const isThereLand = mapMatrix[i - 1][j - 1] > 0;
      // is there land and is there island
      // if there is land above, land left
      const top = countMatrix[i - 1][j];
      const left = countMatrix[i][j - 1];

      const max = Math.max(top, left);
      if (isThereLand > 0) {
        // it is connected
        if (top > 0 || left > 0) {
          countMatrix[i][j] = 0;
        } else {
          // new island
          counter++;
          countMatrix[i][j] = counter;
        }
      } else {
        // no land currently, just copy previous max
        countMatrix[i][j] = max;
      }
    }
  }

  //   const last = countMatrix[h][w];
  return counter;
}

export function countIslands(mapMatrix) {
  let count = 0;
  for (let i = 0; i < mapMatrix.length; i++) {
    for (let j = 0; j < mapMatrix[i].length; j++) {
      if (mapMatrix[i][j] === 1) {
        count++;
        dfsDiagonal(mapMatrix, i, j);
      }
    }
  }
  return count;
}

// question is rly, what is an island, do diagonals count?
function dfs(matrix, i, j) {
  const thereIsNothing =
    i < 0 ||
    j < 0 ||
    i >= matrix.length ||
    j >= matrix[0].length ||
    matrix[i][j] === 0;
  if (thereIsNothing) {
    return;
  }
  // visit
  matrix[i][j] = 0;
  dfs(matrix, i + 1, j);
  dfs(matrix, i - 1, j);
  dfs(matrix, i, j + 1);
  dfs(matrix, i, j - 1);
}
function dfsDiagonal(matrix, i, j) {
  const thereIsNothing =
    i < 0 ||
    j < 0 ||
    i >= matrix.length ||
    j >= matrix[0].length ||
    matrix[i][j] === 0;
  if (thereIsNothing) {
    return;
  }
  // visit
  matrix[i][j] = 0;
  dfsDiagonal(matrix, i + 1, j);
  dfsDiagonal(matrix, i - 1, j);
  dfsDiagonal(matrix, i, j + 1);
  dfsDiagonal(matrix, i, j - 1);
  dfsDiagonal(matrix, i - 1, j - 1);
  dfsDiagonal(matrix, i + 1, j + 1);
  dfsDiagonal(matrix, i + 1, j - 1);
  dfsDiagonal(matrix, i - 1, j + 1);
}
