import { LinkedList } from "./LinkedList.js";

function hash(key, capacity = 16) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
    hashCode = hashCode % capacity;
  }
  return hashCode;
}

class Hashmap {
  constructor(loadFactor, capacity = 16) {
    this.buckets = [];
    this.filledBuckets = 0;
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.totalEntries = 0;
  }

  // Store key value pair in hashmap
  set(key, value) {
    if (this.buckets.length == 0) {
      for (let i = 0; i < this.capacity; i++) {
        this.buckets.push(null);
      }
    }

    // TODO: When key already exists in hashmap,
    // change the value of that key when using
    // set() command.

    // TODO: increase "buckets" as required; the following changes buckets for retrieval-which doesn't work. :(
    // if (this.filledBuckets / this.capacity >= this.loadFactor) {
    //   for (let i = 0; i < this.capacity; i++) {
    //     this.buckets.push(null);
    //   }
    // }

    const bucket = hash(key, this.capacity);

    if (this.buckets[bucket] == null) {
      let list = new LinkedList();
      this.buckets[bucket] = list;
      this.buckets[bucket].append([key, value]);
      this.filledBuckets++;
      this.totalEntries++;
    } else {
      this.buckets[bucket].append([key, value]);
      this.totalEntries++;
    }
  }

  // Retrieve value assigned to key
  get(key) {
    const bucket = hash(key);
    const keyIndex = this.buckets[bucket].find(key);
    const node = this.buckets[bucket].at(keyIndex);
    if (node == "not found") {
      return "not found";
    } else {
      return node[1];
    }
  }

  has(key) {
    const bucket = hash(key);
    const inArray = this.buckets[bucket].keyExists(key);
    return inArray;
  }

  remove(key) {
    const bucket = hash(key);
    console.log("key :", key, " bucket: ", bucket);
    const inArray = this.buckets[bucket].keyExists(key);
    if (inArray == true) {
      const bucketIndex = this.buckets[bucket].find(key);
      this.buckets[bucket].removeAt(bucketIndex);
      this.totalEntries--;
      // TODO: bucket should be null with zero data entries
      console.log(this.buckets[bucket]);
      if (this.buckets[bucket].headNode == null) {
        this.buckets[bucket] = null;
        this.filledBuckets--;
      }
      return true;
    } else if (inArray == false) {
      return false;
    }
  }

  length() {
    return this.totalEntries;
  }

  clear() {
    this.buckets = [];
    this.filledBuckets = 0;
    this.capacity = 0;
    this.totalEntries = 0;
  }
}

let test = new Hashmap(0.75, 16); // Max buckets 16 intially

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test);

test.remove("apple");

console.log(test);
