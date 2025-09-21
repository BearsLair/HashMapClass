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
    this.length = 0;
  }

  // Store key value pair in hashmap
  set(key, value) {
    if (this.buckets.length == 0) {
      for (let i = 0; i < this.capacity; i++) {
        this.buckets.push(null);
      }
    }

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
      this.length++;
    } else {
      this.buckets[bucket].append([key, value]);
      this.length++;
    }
  }
}

let test = new Hashmap(0.75, 16); // Max buckets 16 intially
console.log(test);

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
