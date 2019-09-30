// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }
  size() {
    let tempNode = this.head;
    let length = 0;
    while (tempNode) {
      tempNode = tempNode.next;
      length++;
    }
    return length;
  }
  getFirst() {
    // return this.head;
    return this.getAt(0);
  }
  getLast() {
    // let tempNode = this.head;

    // if (!tempNode) {
    //   return tempNode;
    // }

    // while (tempNode.next) {
    //   tempNode = tempNode.next;
    // }
    // return tempNode;

    return this.getAt(this.size() - 1);
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  //   insertLast(data) {
  //     let newNode = new Node(data);
  //     if (!this.head) {
  //       // LinkList is empty
  //       this.head = newNode;
  //       return;
  //     }
  //     let last = this.getLast();
  //     last.next = newNode;
  //   }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // There are som existing nodes in our chain
      last.next = new Node(data);
    } else {
      //The chain is empty!
      this.head = new Node(data);
    }
  }
  getAt(targetIndex) {
    let tempNode = this.head;
    let currentIndex = 0;

    while (tempNode && currentIndex < targetIndex) {
      currentIndex++;
      tempNode = tempNode.next;
    }
    if (currentIndex === targetIndex) {
      return tempNode;
    }
    return null; //LinkedList is either empty or index is out of bound
  }
  removeAt(index) {
    //if linkedList is empty
    //if linked list has one element,

    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const nodeBefore = this.getAt(index - 1);

    if (!nodeBefore || !nodeBefore.next) {
      return;
    }
    nodeBefore.next = nodeBefore.next.next; // setting node index -1 to point to node at index + 1

    // let nodeAfter = this.getAt(index + 1);

    // if (nodeBefore) {
    //   nodeBefore.next = nodeAfter;
    //   return;
    // }
  }
  insertAt(data, index) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    } else if (index <= 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    const previousNode = this.getAt(index - 1) || this.getLast();

    const prevElAtIndex = previousNode.next;
    previousNode.next = newNode;
    newNode.next = prevElAtIndex;
  }
  forEach(func) {
    let tempNode = this.head;

    while (tempNode) {
      func(tempNode);
      tempNode = tempNode.next;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
