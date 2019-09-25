// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }
  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

// my solution

// class Queue {
//   constructor() {
//     this.StackA = new Stack();
//     this.StackB = new Stack();
//   }
//   peek() {
//     let removedEl;

//     if (this.StackA.peek()) {
//       while (this.StackA.peek()) {
//         this.StackB.push(this.StackA.pop());
//       } // transfering data to StackB, order is now FIFO

//       removedEl = this.StackB.peek(); // removing desired element.

//       while (this.StackB.peek()) {
//         this.StackA.push(this.StackB.pop());
//       } //restore back the original ordering if elements
//     }
//     return removedEl;
//   }
//   add(record) {
//     this.StackA.push(record);
//   }
//   remove() {
//     //pop element from StackA and save it to B
//     //once StackA is empty. pop one element from StackB. (reverse ordered)
//     // pop Elements from StackB and push into StackA.
//     // at the end StackA should be full and stackB just as started.

//     let removedEl;

//     if (this.StackA.peek()) {
//       while (this.StackA.peek()) {
//         this.StackB.push(this.StackA.pop());
//       } // transfering data to StackB, order is now FIFO

//       removedEl = this.StackB.pop(); // removing desired element.

//       while (this.StackB.peek()) {
//         this.StackA.push(this.StackB.pop());
//       } //restore back the original ordering if elements
//     }
//     return removedEl;
//   }
//   // Stack FILO.
//   // q 3,2,1 [3,2,1]  FIFO. adding a element to the front of container. remove from the back
// }

module.exports = Queue;
