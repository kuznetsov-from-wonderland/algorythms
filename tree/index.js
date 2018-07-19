// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

function Node(data) {
  this.data = data
  this.children = []
  this.add = add
  this.remove = remove

  function add(nodeData) {
    const newNode = new Node(nodeData)
    this.children.push(newNode)
  }
  function remove(nodeData) {
    this.children = this.children
      .filter(child => child.data !== nodeData)
  }
}

class Tree {
  constructor() {
    this.root = null
  }
  traverseBF(fn) {
    const iteratorArr = [this.root]
    while (iteratorArr.length) {
      const node = iteratorArr.shift()
      iteratorArr.push(...node.children)
      fn(node)
    }
  }
  traverseDF(fn) {
    const iteratorArr = [this.root]
    while (iteratorArr.length) {
      const node = iteratorArr.shift()
      iteratorArr.unshift(...node.children)
      fn(node)
    }
  }

}

module.exports = { Tree, Node };
