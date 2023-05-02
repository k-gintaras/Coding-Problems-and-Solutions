//     statement: implement a hash table
//     description: A hash table is a data structure that stores key-value pairs and uses a hash function to calculate an index into an array of buckets or slots, from which the desired value can be found
//
//     inputExample: A hash table takes a key and a value as input
//

export class HashTable {
  // for some reason it must have size
  constructor(size) {
    this.data = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hashed = 0;
    for (let i = 0; i < key.length; i++) {
      const charCode = key.charCodeAt(i); // using whatever available to generat a unique number
      hashed += charCode * i;
      hashed = hashed % this.size; // within the bounds/ reminder of the size
    }
    return hashed;
  }

  // we cannot ensure unique values in an easy way
  // without wasting extra memory to make set or what not
  // so we just trust this
  add(key, value) {
    const i = this.hash(key);
    if (!this.data[i]) {
      // because in each index we store array of collision of same hashes just in case
      this.data[i] = [];
    }
    // what to do if already exists, do we return error ?
    // no because abc and cba can have same hash, which is our problem, not users...
    this.data[i].push([key, value]); // we are not allowed to use objects, only arrays
  }

  get(key) {
    const hash = this.hash(key);
    if (this.data[hash]) {
      const arr = this.data[hash];
      // because in each index we store array of collision of same hashes just in case

      for (let i = 0; i < arr.length; i++) {
        const miniArr = arr[i];
        const k = miniArr[0];
        const v = miniArr[1];
        if (k === key) {
          return v;
        }
      }
    }
    return null;
  }

  remove(key) {
    const hash = this.hash(key);
    if (this.data[hash]) {
      const arr = this.data[hash];
      // because in each index we store array of collision of same hashes just in case
      for (let i = 0; i < arr.length; i++) {
        const miniArr = arr[i];
        const k = miniArr[0];
        const v = miniArr[1];
        if (k === key) {
          // remove the value that is there
          console.log(this.data[i]);
          this.data[hash].splice(i, 1);
          if (this.data[hash].length === 0) {
            // in case it was the only duplicate hash value, remove whole thing
            this.data[hash] = undefined;
          }
          return v;
        }
      }
    }
    return null;
  }
}
