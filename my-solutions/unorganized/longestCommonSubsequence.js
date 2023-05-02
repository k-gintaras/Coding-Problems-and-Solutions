//     statement: find the length of the longest common subsequence
//     description: The longest common subsequence (LCS) problem is a classic computer science problem that involves finding the longest subsequence that is present in two given strings
//
//     inputExample: Two strings, s1 and s2

export function longestCommonSubsequence(s1, s2) {
  const matrix = getLcsMatrix(s1, s2);
  const subsequence = getSubsequenceFromMatrix(matrix, s1, s2);
  return subsequence;
}

export function lengthOfLcs(s1, s2) {
  const matrix = getLcsMatrix(s1, s2);
  return matrix[s1.length][s2.length];
}

export function getSubsequenceFromMatrix(matrix, s1, s2) {
  let i = s1.length;
  let j = s2.length;
  let seq = '';
  // we dont really iterate whole map, just zigzag through it, which is kinda fast
  while (i > 0 && j > 0) {
    const cur = matrix[i][j];
    const topLeft = matrix[i - 1][j - 1];
    // we check if diagonal is up and is same after incrementing it just like we did before
    // if strings have same value, just like we did before
    if (cur === topLeft + 1 && s1[i - 1] === s2[j - 1]) {
      seq = s1[i - 1] + seq; // we remember that matrix has extra row and column, we are also adding backwards
      i--;
      j--;
      // we can check either s1 i or s2 j, they both the same, which we just checked

      // we just check whichever is max and move into it
      // it can also be equal
    } else if (matrix[i - 1][j] >= matrix[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return seq;
}

export function getLcsMatrix(s1, s2) {
  const matrix = [];
  const rows = s1.length + 1; // pad for later calc
  const columns = s2.length + 1; // pad for later calc
  for (let i = 0; i < rows; i++) {
    const row = new Array(columns).fill(0);
    matrix.push(row);
  }

  // we pad the reading, so matrix would make more sense
  for (let i = 1; i <= s1.length; i++) {
    const a = s1[i - 1];
    // we pad the reading, so matrix would make more sense
    for (let j = 1; j <= s2.length; j++) {
      const b = s2[j - 1];
      // if equal, then we simply +1 and get previous diagonal value
      if (a === b) {
        const previous = matrix[i - 1][j - 1];
        matrix[i][j] = previous + 1;
      } else {
        // when not equal, take max of either top or left of current
        const top = matrix[i - 1][j];
        const left = matrix[i][j - 1];
        const max = Math.max(top, left);
        matrix[i][j] = max;
      }
    }
  }
  // after all this, last element is answer, even if previously found, it was copied to the last
  return matrix;
}

export function longestCommonSubsequenceFull(s1, s2) {
  const matrix = [];
  // by <= we create extra row of zeros
  for (let i = 0; i <= s1.length; i++) {
    // with +1 we create column of extra zeros
    const arr = new Array(s2.length + 1).fill(0);
    matrix.push(arr);
  }
  // the zeros will be required to calculate previous sequence length
  // and when building one the zeroth position will allow checking for starts of the string

  // to make it easier to read the matrix
  // we will pad the loop forward, but read string a bit back
  for (let i = 1; i <= s1.length; i++) {
    const a = s1[i - 1];
    for (let j = 1; j <= s2.length; j++) {
      const b = s2[j - 1];
      // if it is equal we add + and diagonal value
      // which if you think recursively, we add it to previous stack
      if (a === b) {
        const diagonal = matrix[i - 1][j - 1];
        matrix[i][j] = diagonal + 1;
      } else {
        // we get max of either i-1, j, i, j-1
        // which if you think recursively, we have to get a result from either top subsequence or bottom subsequence
        const left = matrix[i][j - 1]; // move column back, go left, column is inner loop j
        const top = matrix[i - 1][j]; // move row back, go up, row is outer loop i
        const max = Math.max(left, top);
        matrix[i][j] = max;
      }
    }
  }

  let i = s1.length;
  let j = s2.length;
  let seq = '';

  // we dont really iterate whole map, just zigzag through it, which is kinda fast
  while (i > 0 && j > 0) {
    const cur = matrix[i][j];
    const topLeft = matrix[i - 1][j - 1];
    // we check if diagonal is up and is same after incrementing it just like we did before
    // if strings have same value, just like we did before
    if (cur === topLeft + 1 && s1[i - 1] === s2[j - 1]) {
      seq = s1[i - 1] + seq; // we remember that matrix has extra row and column, we are also adding backwards
      i--;
      j--;
      // we can check either s1 i or s2 j, they both the same, which we just checked

      // we just check whichever is max and move into it
      // it can also be equal
    } else if (matrix[i - 1][j] >= matrix[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  console.log('sequence: ');
  console.log(seq);
}

// this is also wrong solution,
// because subsequence is not a sequence
// subsequence can be if some characters are deleted and it still is
// this seems to be bad because indexOf is basically another for loop
export function longestCommonSequence(s1, s2) {
  let currentSequence = '';
  let largestSequence = '';
  for (let i = 0; i < s1.length; i++) {
    const c = s1[i];
    const next = currentSequence + c;
    // if present we keep building
    if (s2.indexOf(next) > -1) {
      currentSequence = next;
      if (currentSequence.length > largestSequence.length) {
        largestSequence = currentSequence;
      }
    } else {
      currentSequence = '';
    }
  }
  return largestSequence;
}

// chat gpt optimized solution
export function findLargestCommonSubsequence(str1, str2) {
  // create a 2D array to store the lengths of the common subsequences
  const lengths = [];
  for (let i = 0; i <= str1.length; i++) {
    lengths[i] = new Array(str2.length + 1).fill(0);
  }

  // fill in the lengths array using dynamic programming
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // if the characters match, increment the length of the common subsequence
        lengths[i][j] = lengths[i - 1][j - 1] + 1;
      } else {
        // otherwise, take the maximum length from the two previous subsequences
        lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1]);
      }
    }
  }

  // read the longest common subsequence from the lengths array
  let subsequence = '';
  let i = str1.length,
    j = str2.length;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      // if the characters match, add the character to the subsequence
      subsequence = str1[i - 1] + subsequence;
      i--;
      j--;
    } else if (lengths[i - 1][j] > lengths[i][j - 1]) {
      // otherwise, move to the next cell with the longer subsequence
      i--;
    } else {
      j--;
    }
  }

  return subsequence;
}
