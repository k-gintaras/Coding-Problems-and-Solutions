//     statement: Find the minimum number of coins to make a given amount
//     description: Given a value of coins, determine the minimum number of coins needed to make a given amount
//     inputExample: Given a set of coins [1, 5, 10, 25] and an amount of money, say 40

// my own first try, figured remainder idea on paper
// it is greedy and not the best solution because:
// [1,3,4] and you need to make change for 6 you would
// find (4), then (1 and 1) = 2 ways
// while you could find (3 and 3) = 1 way // but you skip it
export function minimumCoinAmount1(arr, n) {
  if (!arr) return 0;
  if (arr[0] === n) return 1;
  const counts = new Array(arr.length).fill(0);
  arr.sort((a, b) => b - a);

  let remainingAmount = n;

  for (let i = 0; i < arr.length; i++) {
    const coin = arr[i];
    const remainder = remainingAmount % coin;
    if (remainder === 0) {
      // divisible by largest coin found so far
      // can fill up with this one coin
      const count = remainingAmount / coin;
      counts[i] = count;
      remainingAmount = 0;
    } else {
      // there is remainder and we want to know how many lesser coins can fit in it
      const divisible = remainingAmount - remainder;
      const count = divisible / coin;
      remainingAmount = remainder;
      counts[i] = count;
    }
  }
  console.log(arr);
  console.log(n);
  console.log(counts);
  const filtered = counts.filter((c) => c !== 0);
  return filtered.length;
}

// my own first try but gpt revised
export function minimumCoinAmount2(arr, n) {
  if (!arr || n <= 0) return 0; // n could also be dodgy, so we can exit early

  let remainingAmount = n;
  let coinTypesUsed = 0; // since we are not interested in which coins, we just count

  arr.sort((a, b) => b - a);

  for (const coin of arr) {
    // as long as we can fit coins in remaining amount
    if (remainingAmount >= coin) {
      // we know that if we can fit coin in, then at least one way
      coinTypesUsed++;
      // we want to know if we can fit any other coins in
      remainingAmount %= coin; // sort of same as  a= a%b

      // we may have done this first go or not
      // we are not counting how many of this coin
      // we know this is one and only way to do it with this coin with no remainder
      if (remainingAmount === 0) {
        break;
      }
    }
  }
  return coinTypesUsed;
}

// Dynamic Programming solution for Minimum Coin Change problem
export function minimumCoinAmount(coins, n) {
  // Initialize a DP array with length n+1 and fill it with Infinity.
  // We're looking for the smallest number of coins, so we start with a large placeholder value.
  const counts = new Array(n + 1).fill(Infinity);

  // Base case: There are zero ways to make change for an amount of 0.
  counts[0] = 0;

  // Loop through each amount from 1 to n (inclusive).
  for (let amount = 1; amount <= n; amount++) {
    // For each coin value, attempt to update the DP array.
    for (const coin of coins) {
      // Check if the coin can be used to make the current amount.
      // This also implicitly handles the base case (counts[0]) to build upon.
      // amount - coin also is used further as array index
      // so it is still not very different from amount >=coin
      if (amount - coin >= 0) {
        // Update the minimum number of coins needed for the current amount.
        // This takes into account the coin we're currently considering.
        counts[amount] = Math.min(counts[amount], counts[amount - coin] + 1);
      }
    }
  }

  // If we couldn't make the amount with the given coins, return -1.
  return counts[n] === Infinity ? -1 : counts[n];
}
