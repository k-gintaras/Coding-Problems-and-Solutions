// trie;
//     statement: implement a trie
//     description: A trie is a tree-like data structure used for storing strings
//  It is also known as a prefix tree, as it can be used to store a set of strings with a common prefix
//  Each node in the tree represents a single character of the string, and the path from the root to the node represents the string
//
//     inputExample: A string

export function trieTest(input) {
  const t = new Trie('apple');
  t.add('application');
  //   const t = new Trie(input);
  // t.delete('application');
  const found = t.search('apple');
  const s = JSON.stringify(t, null, 2);

  console.log(found);
  // console.log(s);
}

class Trie {
  root = null;
  constructor(word) {
    if (!this.root) {
      this.root = new Node(null);
    }
    this.add(word);
  }

  add(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      if (!node.getChild(c)) {
        node.setChild(new Node(), c);
      }
      node = node.getChild(c);
    }
    node.setAsWord();
  }

  delete(word) {
    this.recursiveDelete(this.root, word, 0);
  }

  recursiveDelete(node, word, i) {
    // base case
    if (i === word.length) {
      if (node.isWord()) {
        node.setAsNotWord();
        const hasChildren = Object.keys(node.children).length === 0;
        return hasChildren;
      }
      return false;
    }

    const c = word[i];
    const nextNode = node.getChild(c);
    if (!nextNode) return false;

    const shouldDeleteChild = this.recursiveDelete(nextNode, word, i + 1);
    if (shouldDeleteChild) {
      node.setChild(null, c);
      return !node.isWord() && Object.keys(node.children).length === 0;
    }

    return false;
  }

  search(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      const c = str.charAt(i);
      const child = node.getChild(c);
      if (!child) {
        return false;
      }
      node = child;
    }
    return node.isWord();
  }

  startsWith(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      const c = str.charAt(i);
      const child = node.getChild(c);
      if (!child) {
        return false;
      }
      node = child;
    }
    return true;
  }
}

class Node {
  word = false;
  children = {};

  isWord() {
    return this.word;
  }

  setAsWord() {
    this.word = true;
  }

  setAsNotWord() {
    this.word = true;
  }

  setChild(node, character) {
    if (node === null) {
      delete this.children[character];
    } else {
      this.children[character] = node;
    }
  }

  getChild(character) {
    if (!this.children[character]) return null;
    return this.children[character];
  }
}
