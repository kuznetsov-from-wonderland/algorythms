// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / | \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const STOPPER = 'stopper'
  const counters = [0]
  const iteratorArr = [root, STOPPER]
  while (iteratorArr.length > 1) {
    const node = iteratorArr.shift()
    if(node === STOPPER) {
      counters.push(0)
      iteratorArr.push(STOPPER)
    } else {
      iteratorArr.push(...node.children)
      counters[counters.length - 1]++
    }
  }
  return counters
}

module.exports = levelWidth;
