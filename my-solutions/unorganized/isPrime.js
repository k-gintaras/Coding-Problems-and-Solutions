// statement: write a function to check if a number is prime
// description: This function should take a number as an argument and return a boolean value indicating whether or not the number is prime
// inputExample: checkPrime(7)
export function isPrime(n) {
  // there is probably some math formula for it
  // I would use remainder for all numbers upto the size of the number
  // if remainder 0 it is not prime, because it cleanly divides by that number

  // no need to test for 0 or 1, because every number divisible by it even primes :D heheheheh
  for (let i = 2; i < n; i++) {
    const m = i;
    if (n % m == 0) {
      return false;
    }
  }
  return true;
}
