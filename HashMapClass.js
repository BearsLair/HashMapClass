class Hashmap {
  constructor(loadFactor, capacity = 16) {
    this.buckets = [];
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.currentCapacity = capacity;
  }

  // Store key value pair in hashmap
  Set(key, value) {
    if (this.buckets.length == 0) {
      for (let i = 0; i < this.capacity; i++) {
        this.buckets.push(null);
      }
    }

    // TODO: increase "buckets" as required

    const bucket = hash(key, capacity);
  }
}

function hash(key, capacity = 16) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
  }
  return hashCode;
}
