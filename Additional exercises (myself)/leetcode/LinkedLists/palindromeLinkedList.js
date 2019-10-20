// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

const reverse = head => {
  let rev;

  while (head) {
    let next = head.next;
    head.next = rev;
    rev = head;
    head = next;
  }
  return rev;
};

var isPalindrome = function(head) {
  // Time Complexity: O(N). Space Complexity: O(1)
  // two pointer slow and fast. slow will next by one step, and fast will move by two steps. once fast reaches the end of the list, slow will be at the middle.
  // if fast !== null, list is odd and slow should be moved to the next node, to skip middle element in the list.
  // take slow list and reverse it.
  // while(reverse!== null) compare slow and head.

  let slow = head,
    fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast) {
    slow = slow.next;
  }

  //reversing right hand side of the list
  let rev = reverse(slow);

  while (head && rev) {
    if (head.val !== rev.val) {
      return false;
    }
    head = head.next;
    rev = rev.next;
  }

  return true;
};

////////////////////////////////////

var isPalindrome = function(head) {
  const stackNode = [];
  let temp = head;
  while (temp) {
    stackNode.push(temp.val);
    temp = temp.next;
  }
  temp = head;
  while (stackNode.length > 0) {
    if (stackNode.pop() === temp.val) {
      temp = temp.next;
    } else {
      return false;
    }
  }
  return true;
};
