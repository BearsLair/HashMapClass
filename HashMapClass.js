class Hashmap {
  constructor(loadFactor, capacity = 16) {
    this.buckets = [];
    this.loadFactor = loadFactor;
    this.capacity = capacity;
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
