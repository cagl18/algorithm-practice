// Remove Nth Node From End of List
// Solution
// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

//solution 1

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var removeNthFromEnd = function(head, n) {
  //Time Complexity: O(N) and Space Complexity: O(1)
  if (!head.next) return null;

  let slow = head,
    fast = head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  if (!fast) {
    //remove the head element
    head = head.next;
    return head;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // removing nth element;
  slow.next = slow.next.next;
  return head;
};
// //solution 2:
// var removeNthFromEnd = function(head, n) {
//   let a = head,
//     b = head;
//   for (let i = 0; i < n; i++) b = b.next;
//   if (b == null) return a.next;
//   while (b.next) {
//     a = a.next;
//     b = b.next;
//   }
//   a.next = a.next.next;
//   return head;
// };
