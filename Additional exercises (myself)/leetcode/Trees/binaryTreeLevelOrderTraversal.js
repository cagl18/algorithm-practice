// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// Solutiion 1: iterative solution. Time Complexity: O(N). Space Complexity O(N)
var levelOrder = function(root) {
  //traverse tree using BFS. queue. right to left.

  if (!root) {
    return [];
  }

  let q = [root, 's'];
  let result = [[root.val]];
  let level = [];

  while (q.length > 1) {
    let node = q.shift();

    if (node === 's') {
      q.push('s');
      result.push(level);
      level = [];
    }
    if (node.left) {
      q.push(node.left);
      level.push(node.left.val);
    }
    if (node.right) {
      q.push(node.right);
      level.push(node.right.val);
    }
  }

  return result;
};
