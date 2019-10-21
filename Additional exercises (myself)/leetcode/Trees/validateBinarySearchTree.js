// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

var isValidBST = function(root, min = null, max = null) {
  // the tree is valid if all the nodes on the left are smaller all its parents nodes and all the right children are greater than all its parent nodes.
  // when traversing the left side of the tree, the max var will always greater its left child.
  // when travering the right side of the tree, the min var will always smaller its right child.

  if (!root) {
    return true;
  }

  if (max !== null && root.val >= max) {
    return false;
  }
  if (min !== null && root.val <= min) {
    return false;
  }
  if (root.left && !isValidBST(root.left, min, root.val)) {
    return false;
  }
  if (root.right && !isValidBST(root.right, root.val, max)) {
    return false;
  }

  return true;
};
