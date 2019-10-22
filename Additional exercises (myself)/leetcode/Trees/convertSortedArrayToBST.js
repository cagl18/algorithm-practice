// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

var sortedArrayToBST = function(nums) {
  //Time and Space complexity --> O(N)
  //root node will be floor(nums.length -1)/2; the width of each side of the tree.
  //start at root, floor(nums.length -1)/2.

  if (!nums || nums.length === 0) {
    return null;
  }

  const rootIndex = Math.floor((nums.length - 1) / 2);
  let root = new TreeNode(nums[rootIndex]);
  let leftSubTree = nums.slice(0, rootIndex);
  let rightSubTree = nums.slice(rootIndex + 1);
  // or
  //   let leftSubTree = nums.splice(0, rootIndex);
  //   let rightSubTree = nums.splice(1);

  root.left = sortedArrayToBST(leftSubTree);
  root.right = sortedArrayToBST(rightSubTree);

  return root;
};

//shorter solution.
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;

  const mid = Math.floor((nums.length - 1) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));

  return node;
};
