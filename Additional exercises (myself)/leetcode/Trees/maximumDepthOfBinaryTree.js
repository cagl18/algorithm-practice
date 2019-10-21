// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

// using iteration approach: Time Complexity: O(n). Space complexity: O(1).
var maxDepth = function(root) {
  // use an array as a quere to store each value of the tree.

  if (!root) {
    return 0;
  }

  let queue = [root, 's'];
  let depth = 0;

  while (queue.length > 0) {
    let node = queue.shift();
    if (node === 's') {
      depth++;
      if (queue.length > 0) {
        queue.push('s');
      }
    }
    if (node && node.left) {
      queue.push(node.left);
    }
    if (node && node.right) {
      queue.push(node.right);
    }
  }
  return depth;
};

// using recursion
const maxDepth = root => {
  if (!root) return 0; // there is no height
  let left = maxDepth(root.left); // ex: [3, 9, 20]
  let right = maxDepth(root.right);

  return left > right ? left + 1 : right + 1;
  // return Math.max(leftVal, rightVal) +1;
};
