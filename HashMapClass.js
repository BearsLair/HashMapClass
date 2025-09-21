import { LinkedList } from "./LinkedList.js";

function hash(key, capacity = 16) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
  }
  return hashCode;
}

class Hashmap {
  constructor(loadFactor, capacity = 16) {
    this.buckets = [];
    this.totalBuckets = 0;
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.currentCapacity = capacity;
  }

  // Store key value pair in hashmap
  set(key, value) {
    if (this.buckets.length == 0) {
      for (let i = 0; i < this.capacity; i++) {
        this.buckets.push(null);
      }
    }

    // TODO: increase "buckets" as required
    if (this.totalBuckets / this.currentCapacity >= this.loadFactor) {
      this.currentCapacity = this.currentCapacity + this.capacity
      for (let i = 0; i < this.capacity; i++) {
        this.buckets.push(null);
      }
    }

    const bucket = hash(key, this.currentCapacity);

    if (this.buckets[bucket] == null) {
      let list = new LinkedList();
      this.buckets[bucket] = list;
      this.buckets[bucket].append([key, value]);
      this.totalBuckets++;
    } else {
      this.buckets[bucket].append([key, value]);
    }
  }
}

let test = new Hashmap(0.75, 16); // Max buckets 12 intially
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
