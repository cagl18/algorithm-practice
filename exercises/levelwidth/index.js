// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

//instructor solution
function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

// my soluation

// function levelWidth(root) {
//   if (!root) {
//     return [0];
//   }

//   const counters = [0];
//   const widthArray = [root, 's'];
//   let temp = null;
//   let index = 0;
//   while (widthArray.length > 1) {
//     temp = widthArray.shift();

//     if (temp === 's') {
//       index++;
//       counters[index] = 0;
//       widthArray.push(temp);
//     } else {
//       counters[index]++;

//       if (temp.children) {
//         widthArray.push(...temp.children);
//       }
//     }
//   }

//   return counters;
// }

module.exports = levelWidth;
