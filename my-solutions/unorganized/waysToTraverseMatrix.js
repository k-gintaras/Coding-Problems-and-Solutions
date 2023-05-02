//     statement: find the number of ways to traverse a matrix
//     description: Given a matrix of size m x n, the task is to count the number of ways to traverse from the top-left corner to the bottom-right corner
//  You can only move either down or right at any point in time
//
//     inputExample: m = 3, n = 3

// or use combinatorics C(m, n) = m! / (n! * n!)
// there is m down moves and n right moves, how many ways to arrange m and n given ???
// my first code solved on my own with no googling, just using tips from dynamic programming
// altho on paper i was kinda guessing what columns or rows to use to produce next number
// turns out it was the sum of up and left
export function waysToTraverseMatrix(m, n) {
  const matrix = [];
  for (let i = 0; i < m; i++) {
    const row = new Array(n).fill(1);
    matrix.push(row);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const up = matrix[i - 1][j];
      const left = matrix[i][j - 1];
      matrix[i][j] = up + left;
    }
  }
  return matrix[m - 1][n - 1];
}
