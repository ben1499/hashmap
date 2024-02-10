const Node = require("./Node");
const LinkedList = require("./LinkedList");

// HashMap Implementation

function hashMap() {
  const loadFactor = 0.75;
  // No of items filled in the buckets array
  let bucketLoad = 0;
  let capacity = 16;

  let buckets = Array(capacity).fill(null);

  // const buckets = [];

  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  };

  const checkLoadFactor = () => {
    if ((bucketLoad / capacity) > loadFactor) {
      return true;
    }
    return false;
  };

  const regrow = () => {
    const currentEntries = entries();
    console.log("Regrow called");
    capacity = capacity * 2;
    buckets = Array(capacity).fill(null);

    currentEntries.forEach((entry) => {
      set(entry[0], entry[1])
    })
  };

  const set = (key, value) => {
    const hashedKey = hash(key);

    if (buckets[hashedKey]) {
      const existingList = buckets[hashedKey];

      if (existingList.contains(key)) {
        const nodeIndex = existingList.find(key);
        existingList.removeAt(nodeIndex);
        existingList.append(key, value);
      } else {
        existingList.append(key, value);
      }
      // If bucket is empty
    } else {
      bucketLoad++;
      const newList = LinkedList();
      newList.append(key, value);
      buckets[hashedKey] = newList;
    }

    const isOverload = checkLoadFactor();
    if (isOverload) regrow();
  };

  const get = (key) => {
    const hashCode = hash(key);
    if (buckets[hashCode]) {
      const bucket = buckets[hashCode];
      const index = bucket.find(key);
      let node;
      if (index != null) {
        node = bucket.at(index);
        return node.value;
      }
      else return null;
    }
    return null;
  };

  const has = (key) => {
    const hashCode = hash(key);
    if (buckets[hashCode]) {
      const bucket = buckets[hashCode];
      if (bucket.contains(key)) return true;
      return false;
    }
    return false;
  };

  const remove = (key) => {
    const hashCode = hash(key);
    if (buckets[hashCode]) {
      const bucket = buckets[hashCode];
      const index = bucket.find(key);
      if (index != null) {
        const isRemoved = bucket.removeAt(index);
        if (isRemoved) return true;
        return false
      }
      return false;
    }
    return false;
  };

  const length = () => {
    let totalLength = 0;
    buckets.forEach((bucket) => {
      if (bucket != null) {
        totalLength += bucket.size;
      }
    })
    return totalLength;
  };

  const clear = () => {
    buckets.forEach((bucket) => {
      if (bucket != null) {
        let size = bucket.size;
        while (size != 0) {
          bucket.pop();
          size--;
        }
      }
    })
  }

  const keys = () => {
    const keyArray = [];
    buckets.forEach((bucket) => {
      if (bucket != null) {
        let size = bucket.size;
        for (let i = 0; i < size; i++) {
          const node = bucket.at(i);
          keyArray.push(node.key);
        }
      }
    })
    return keyArray;
  }

  const values = () => {
    const valueArray = [];
    buckets.forEach((bucket) => {
      if (bucket != null) {
        let size = bucket.size;
        for (let i = 0; i < size; i++) {
          const node = bucket.at(i);
          valueArray.push(node.value);
        }
      }
    })
    return valueArray;
  }

  const entries = () => {
    const entryArray = [];
    buckets.forEach((bucket) => {
      if (bucket != null) {
        let size = bucket.size;
        for (let i = 0; i < size; i++) {
          const nodeArray = [];
          const node = bucket.at(i);
          nodeArray.push(node.key, node.value)
          entryArray.push(nodeArray);
        }
      }
    })
    return entryArray;
  }

  return {
    get buckets() {
      return buckets;
    },
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}
const newList = LinkedList();

module.exports = hashMap;
