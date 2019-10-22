// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// Note:
// Bonus points if you could solve it both recursively and iteratively.

//recursive solution: Time Complexity O(N). Space Complexity O(N).
var isSymmetric = function(t1, t2 = t1) {
  // if t1 and t2 are null, then return true. if !t1 || !t2, then false.
  // call isSymmetric(t1.left,t2.right) and isSymmetric(t1.right,t2.left)
  if (t1 === null && t2 === null) {
    return true;
  }

  if (!t1 || !t2) {
    return false;
  }

  return (
    t1.val === t2.val &&
    isSymmetric(t1.left, t2.right) &&
    isSymmetric(t1.right, t2.left)
  );
};

var isSymmetric = function(root) {
  // iterative solution: if tree is empty or has one node and no children, return true.
  //push the left and right children into an array then compare the last element with the first element.
  // if first and last element are not equal return false. continue will progress for the entire tree. lastly return true.

  if (!root) {
    return true;
  }
  if (root && (!root.left && !root.right)) {
    return true;
  }

  if (root && (!root.left || !root.right)) {
    return false;
  }
  let currentLevel = [root.left, root.right];

  while (currentLevel.length > 0) {
    let first = currentLevel.shift(),
      last = currentLevel.shift();

    if (!first && !last) continue;
    if (!first || !last) return false;
    if (last.val !== first.val) return false;

    currentLevel.push(first.left, last.right, first.right, last.left);
  }
  return true;
};

// var isSymmetric = function(root) {
//     // iterative solution: if tree is empty or has one node and no children, return true.
//     //push the left and right children into an array then compare the last element with the first element.
//     // if first and last element are not equal return false. continue will progress for the entire tree. lastly return true.

//     if (!root) {
//       return true;
//     }
//     if (root && (!root.left || !root.right)) {
//       return false;
//     }

//     let currentLevel = [root.left, root.right],
//       nextLevel = [...currentLevel];

//     while (currentLevel.length > 0) {
//       let last = currentLevel.pop(),
//         first = currentLevel.shift();

//        if((last.val !== first.val){
//        return false;
//        }
//       if (!first.left && last.right || !first.right && last.left) {
//         return false;
//       }

//       nextLevel.push(first.left, first.right, last, left, last.right);

//       if (currentLevel.length === 0) {
//         currentLevel = nextLevel;
//         nextLevel = [];
//       }
//     }
//   };

// var isSymmetric = function(root) {
//   // traverse tree using BST and store it in an array. if first element !== last element return false;

//   if (
//     !root ||
//     (root &&
//       ((!root.left && !root.right) || (!root.right.val && root.left.val)))
//   ) {
//     return true;
//   }

//   let arr = [root.left, root.right, 's'],
//     rowLevel = [...arr];

//   while (arr.length > 1) {
//     let stopper = arr.pop();
//     console.log('rowLevel', rowLevel);
//     while (rowLevel.length > 1) {
//       let last = arr.pop();
//       let first = arr.shift();
//       if (first && last && first.val !== last.val) {
//         return false;
//       }
//       if (first && first.left) {
//         rowLevel.push(first.left);
//       }
//       if (first && first.right) {
//         rowLevel.push(first.right);
//       }
//       if (last && last.left) {
//         rowLevel.push(last.left);
//       }
//       if (last && last.right) {
//         rowLevel.push(last.right);
//       }
//     }

//     arr = [...rowLevel, 's'];
//   }

//   return true;
// };
