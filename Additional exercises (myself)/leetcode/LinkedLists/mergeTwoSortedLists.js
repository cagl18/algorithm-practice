// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

var mergeTwoLists = function(l1, l2) {
  // compare l1 and l2 and place the smaller / equal element into place into a newList.
  // move the pointer of the list we took the element from to its next element.
  // if we reach to the end of l1 or l2, take the remaining of the other list and add it to the end of the the newList.

  let head = new ListNode(),
    tail = head;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  tail.next = l1 || l2;
  return head.next;
};
