import LinkedList from "../robs-linked-list/LinkedList";

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = [...Array(hashTableSize)].map(() => new LinkedList());
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  hashFunc(key) {
    let hash = 0;

    if (key.length === 0) {
      return hash;
    }

    for (let i = 0; i < key.length; i++) {
      let char = key.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash % this.buckets.length;
  }

  // 1. get the hash value of the key
  // 2. look to see if the current key already exists in the linked list
  //    2a. if it does only update the value
  //    2b. otherwise add the value
  // 3. update the keys obj
  set(key, value) {
    const hash = this.hashFunc(key);
    const node = this.get(key);

    if (node) {
      // if the current key already exists in the linked list then just update th value
      node.value.value = value;
    } else {
      this.buckets[hash].add(value);
    }
  }

  // 1. get the hash value of the key
  // 2. delete the value by the key
  //   2a. if the value is successfully deleted, update the keys obj
  //   2b. if not then return an error message
  delete(key) {
    const hash = this.hashFunc(key);
    const linkedList = this.buckets[hash];
    const nodeToDelete = linkedList.delete({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (nodeToDelete) {
      delete this.keys[key];
    } else {
      return "Value not found";
    }
  }

  // return foundNode
  get(key) {
    const hash = this.hashFunc(key);
    const linkedList = this.buckets[hash];

    return linkedList.search({
      callback: (nodeValue) => nodeValue.key === key,
    });
  }

  // return node value
  getValue(key) {
    const node = this.get(key);

    return node ? node.value.value : null;
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return !!this.get(key);
  }
}
