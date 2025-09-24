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

export class Hashmap {
  constructor(loadFactor, capacity = 16) {
    this.buckets = [];
    this.filledBuckets = 0;
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.totalEntries = 0;
  }

  // Store key value pair in hashmap
  set(key, value) {
    // increase "buckets" as required
    if (this.filledBuckets / this.capacity >= this.loadFactor) {
      console.log("increased buckets triggered");
      this.increaseBuckets();
    }

    if (this.buckets.length == 0) {
      for (let i = 0; i < this.capacity; i++) {
        this.buckets.push(null);
      }
    }

    const bucket = hash(key, this.capacity);

    //Change value if key already exists in Hashmap

    if (this.buckets[bucket] == null) {
      let list = new LinkedList();
      this.buckets[bucket] = list;
      this.buckets[bucket].append([key, value]);
      this.filledBuckets++;
      this.totalEntries++;
    } else if (this.has(key) == true) {
      // Logic for changing value for existing key
      const keyIndex = this.buckets[bucket].find(key);

      let current = this.buckets[bucket].headNode;
      let i = -1;

      while (current != null) {
        i++;
        if (i == keyIndex) {
          current.value = [key, value];
          break;
        } else {
          current = current.nextNode;
        }
      }
    } else {
      this.buckets[bucket].append([key, value]);
      this.totalEntries++;
    }
  }

  // Retrieve value assigned to key
  get(key) {
    const bucket = hash(key, this.capacity);
    const keyIndex = this.buckets[bucket].find(key);
    const node = this.buckets[bucket].at(keyIndex);
    if (node == "not found") {
      return "not found";
    } else {
      return node[1];
    }
  }

  has(key) {
    console.log(`${key} sent to has(key)`);
    const bucket = hash(key, this.capacity);
    console.log(`bucket ${bucket} for ${key} in has(key)`);
    console.log(this.buckets[12]);
    if (this.buckets[bucket] == null) {
      console.log(`${key} evaluated to false`);
      return false;
    } else {
      const inArray = this.buckets[bucket].keyExists(key);
      console.log(`${key} in has(key) evaluated as: `, inArray);
      return inArray;
    }
  }

  remove(key) {
    const bucket = hash(key, this.capacity);
    const inArray = this.buckets[bucket].keyExists(key);
    if (inArray == true) {
      const bucketIndex = this.buckets[bucket].find(key);
      this.buckets[bucket].removeAt(bucketIndex);
      this.totalEntries--;
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

  keys() {
    let keys = [];

    this.buckets.map((bucket) => {
      if (bucket != null) {
        let current = bucket.headNode;

        while (current != null) {
          keys.push(current.value[0]);
          current = current.nextNode;
        }
      }
    });

    console.log(keys);
  }

  values() {
    let values = [];

    this.buckets.map((bucket) => {
      if (bucket != null) {
        let current = bucket.headNode;

        while (current != null) {
          values.push(current.value[1]);
          current = current.nextNode;
        }
      }
    });

    console.log(values);
  }

  entries() {
    let data = [];

    this.buckets.map((bucket) => {
      if (bucket != null) {
        let current = bucket.headNode;

        while (current != null) {
          data.push(current.value);
          current = current.nextNode;
        }
      }
    });

    console.log(data);

    return data;
  }

  increaseBuckets() {
    const dataArray = this.entries();

    this.buckets = [];
    this.capacity = this.capacity * 2;
    this.filledBuckets = 0;

    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(null);
    }

    dataArray.map((data) => {
      const bucket = hash(data[0], this.capacity);

      if (this.buckets[bucket] == null) {
        let list = new LinkedList();
        this.buckets[bucket] = list;
        this.buckets[bucket].append(data);
        this.filledBuckets++;
      } else {
        this.buckets[bucket].append(data);
      }
    });

    console.log("increased buckets finished");
  }
}
