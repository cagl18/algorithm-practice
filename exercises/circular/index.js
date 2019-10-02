// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

//instructor solution

function circular(list) {
  // have to pointer slow and fast. Incremenet slow by 1 and fast by 2.
  // until either slow === fast or fast.next || fast.next.next === null

  let slow = list.head;
  let fast = list.getFirst();

  if (!list.head) {
    return false;
  }

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// function circular(list) {
//   // have to pointer slow and fast. Incremenet slow by 1 and fast by 2.
//   // until either slow === fast or fast.next || fast.next.next === null

//   let slow = list.head;
//   let fast = list.getFirst();

//   if (!list.head) {
//     return false;
//   }

//   while (slow !== fast || (fast.next !== null || fast.next.next !== null)) {
//     slow = slow.next;
//     fast = fast.next.next || null;
//     if (slow === fast) {
//       return true;
//     } else if (fast.next === null || fast.next.next === null) {
//       return false;
//     }
//   }
// }

module.exports = circular;
