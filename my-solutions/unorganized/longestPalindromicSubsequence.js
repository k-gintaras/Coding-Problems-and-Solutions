//     statement: find the length of the longest palindromic subsequence
//     description: A palindromic subsequence is a sequence of characters that is the same when read forwards and backwards
//  The length of the longest palindromic subsequence is the number of characters in the longest palindromic subsequence
//
//     inputExample: ABCBAC

export function longestPalindromicSubsequence(str) {
  if (!str) return 0;
  if (str.length === 1) return 1;
  // define matrix
  // there is no 0 case if string is empty, so there is no need for extra row
  const n = str.length;
  const m = [];
  for (let i = 0; i < n; i++) {
    m.push(new Array(n).fill(0));
  }

  // 1 character is palindrome length 1
  // diagonal i,i = 1
  for (let i = 0; i < m.length; i++) {
    m[i][i] = 1;
  }

  // iterate width start from 2
  for (let w = 2; w <= n; w++) {
    // iterate rows and calculate column, which is width added
    for (let i = 0; i < n - w + 1; i++) {
      // limit first bound to not go out
      const j = i + w - 1; // second bound is first bound + width, width is 1 longer than matrix position so -1
      const leftest = str.charAt(i);
      const rightest = str.charAt(j);
      // calculate simplest case, 2 characters
      if (leftest === rightest && w === 2) {
        m[i][j] = 2; // equal 2 characters are palindrome length 2
      } else if (leftest === rightest) {
        // sides are equal
        const previous = m[i + 1][j - 1]; // because we are filling matrix in diagonal way, previous value is bottom left, +1 -1
        m[i][j] = previous + 2; // so 2 characters to be added to previous palindrome
      } else {
        // different, we take previously found and saved value
        // whichever is bigger, to continue the chain
        const previousBottom = m[i + 1][j];
        const previousLeft = m[i][j - 1];
        m[i][j] = Math.max(previousBottom, previousLeft);
      }
    }
  }
  // first row last column, since we fill diagonally towards corner
  console.log(m);
  return m[0][n - 1];
}

export function badAttempt(input) {
  // short cases
  if (!input) {
    return 0;
  }
  if (input.length === 1) {
    return 1;
  }

  const matrix = [];
  const rows = input.length; // + 1; no need extra row as there is no case for 0
  const columns = input.length; //  + 1; no need extra row as there is no case for 0
  for (let i = 0; i < rows; i++) {
    const row = new Array(columns).fill(0);
    matrix.push(row);
  }

  for (let i = 0; i < rows; i++) {
    matrix[i][i] = 1;
  }

  for (let i = 1; i <= input.length; i++) {
    const a = input.charAt(i - 1);
    for (let j = i + 1; j <= input.length; j++) {
      const b = input.charAt(j - 1);
      const left = matrix[i - 1][j];
      const bottom = matrix[i][j - 1];
      if (a === b) {
        matrix[i][j] = matrix[i - 1][j - 1] + 2; // because we add to previous length a and b from the sides, they are the same
      } else {
        matrix[i][j] = Math.max(left, bottom); // just previous value, as we didnt find any larger
      }
    }
  }
  console.log(matrix);
  return matrix[1][columns - 1]; // last column
}

/**
 * Find the length of the Longest Palindromic Subsequence (LPS) in a given string.
 * @param {string} input - The input string.
 * @return {number} - The length of the LPS.
 */
function longestPalindromicSubsequenceGPT(input) {
  const n = input.length;
  // Create a 2D matrix (n x n), initializing all cells to 0
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  // A single character is always a palindrome of length 1
  for (let i = 0; i < n; i++) {
    matrix[i][i] = 1;
  }

  // Loop over the string in reverse so that we calculate shorter substrings first
  for (let cl = 2; cl <= n; cl++) {
    for (let i = 0; i < n - cl + 1; i++) {
      const j = i + cl - 1; // End index of the current substring

      // For a two-character substring, check if both characters are the same
      if (input[i] === input[j] && cl == 2) {
        matrix[i][j] = 2;
      }
      // If the first and last characters are the same, we can increase the LPS length by 2
      else if (input[i] === input[j]) {
        matrix[i][j] = matrix[i + 1][j - 1] + 2;
      }
      // If the first and last characters are different, take the maximum LPS length from the substrings
      else {
        matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i + 1][j]);
      }
    }
  }

  // The value in the top-right corner of the matrix contains the length of the LPS for the entire string
  return matrix[0][n - 1];
}

// const input = "BBABCBCAB";
// const result = longestPalindromicSubsequence(input);
// console.log(`The length of the Longest Palindromic Subsequence is: ${result}`);
