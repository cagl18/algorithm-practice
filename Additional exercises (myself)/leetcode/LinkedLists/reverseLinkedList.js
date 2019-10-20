// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

//iterative solution
var reverseList = function(head) {
  //take each element and place the front of a new list
  if (!head) {
    return null;
  }

  let reverse = null,
    previous = null;

  while (head) {
    previous = new ListNode(head.val);
    previous.next = reverse;
    reverse = previous;
    head = head.next;
  }

  return reverse;
};

//Interative solution 2: check it later
var reverseList = function(head) {
  let previous = null;
  while (head) {
    const next = head.next;
    const current = head;
    current.next = previous;
    head = next;
    previous = current;
  }
  return previous;
};

//recursive solution
var reverseList = function(head, reverse = null) {
  if (!head) {
    return reverse;
  }

  let previous = new ListNode(head.val);
  previous.next = reverse;
  reverse = previous;
  head = head.next;
  return reverseList(head, reverse);
};

var reverseList = function(head, reverse = null) {
  // two argument, head and reverse. for each iteration, the head will go to the front of the reverse list and the head pointer will become the next node(head.next).
  if (!head) {
    //base case
    return reverse;
  }

  let temp = head.next;
  head.next = reverse;
  reverse = head;
  head = temp;

  return reverseList(head, reverse);
};
