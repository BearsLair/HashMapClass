// The nodes are NESTED Node objects, joined together via nextNode property.

export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.length = 0;
    this.headNode = null;
  }

  // append(value) - adds new node to end of list
  append(value) {
    let node = new Node(value, null);

    if (this.headNode === null) {
      this.headNode = node;
      this.length++;
    } else {
      let current = this.headNode;

      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = node;
      this.length++;
    }
  }

  // prepend(value) - adds new node to start of list
  // size - returns total number of nodes
  size() {
    return this.length;
  }
  // head - returns first node
  head() {
    return this.headNode.value;
  }
  // tail - returns last node in list
  tail() {
    let current = this.headNode;

    while (current != null) {
      if (current.nextNode == null) {
        return current.value;
      } else {
        current = current.nextNode;
      }
    }
  }
  // at(index) - returns value at given index (0-based).
  at(index) {
    let current = this.headNode;
    let i = -1;

    while (i < this.length) {
      i++;

      if (i == index) {
        return current.value;
      }

      current = current.nextNode;
    }
  }
  // pop - removes last element of list
  pop() {
    let current = this.headNode;
    let i = 1;

    while (i < this.length - 1) {
      current = current.nextNode;
      i++;
    }

    current.nextNode = null;
    this.length--;
  }
  // constains(value) - returns true if value is in list, false otherwise
  contains(value) {
    let current = this.headNode;

    while (current != null) {
      if (current.value == value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }
  // find(value) - returns index of node containing value
  find(value) {
    let current = this.headNode;
    console.log(current);
    if (current == null) {
      return "not found";
    }
    let i = 0;

    while (i < this.length) {
      if (current.value[0] == value) {
        return i;
      } else {
        console.log("here? ", value);
        console.log(current.nextNode);
        current = current.nextNode;
        i++;
      }
    }

    return "not found";
  }

  keyExists(value) {
    let current = this.headNode;
    let i = 0;

    if (this.headNode == null) {
      return false;
    }

    while (i < this.length) {
      if (current.value[0] == value) {
        return true;
      } else {
        current = current.nextNode;
        i++;
      }
    }

    return false;
  }
  // toString - display list objects as strings
  // with format: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let current = this.headNode;
    let string = "";

    while (current != null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    string += "null";

    return string;
  }

  // insertAt(value, index) - inserts new node at given index
  insertAt(value, index) {
    let current = this.headNode;
    let i = 0;
    let nextNodeCopy = null;

    while (i < index) {
      if (i == index - 1) {
        nextNodeCopy = current.nextNode;
        current.nextNode = new Node(value, nextNodeCopy);
        this.length++;
        break;
      } else {
        current = current.nextNode;
        i++;
      }
    }
  }
  // removeAt(index) - removes node at index
  removeAt(index) {
    let current = this.headNode;
    let i = 0;
    let nextNodeCopy = null;

    while (i <= index) {
      if (i == index) {
        nextNodeCopy = current.nextNode;
        break;
      } else {
        current = current.nextNode;
        i++;
      }
    }

    i = 0;
    current = this.headNode;

    while (i < index) {
      if (i == index - 1) {
        current.nextNode = nextNodeCopy;
        break;
      } else {
        current = current.nextNode;
        i++;
      }
    }

    this.length--;
  }
}
