// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(data) {
    const newNode = new Node(data, this.head)
    this.head = newNode
  }
  size() {
    if (!this.head) return 0
    let size = 1
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
      size++
    }
    return size
  }
  getFirst() {
    return this.head
  }
  getLast() {
    if (!this.head) return null
    else {
      let lastNode = this.head
      while (lastNode.next) {
        lastNode = lastNode.next
      }
      return lastNode
    }
  }
  clear() {
    this.head = null
  }
  removeFirst() {
    if (!this.head.next) this.clear()
    else {
      this.head = this.head.next
    }
  }
  removeLast() {
    if (this.size() <= 1) this.clear()
    else {
      let lastNode = this.head
      while (lastNode.next.next) {
        lastNode = lastNode.next
      }
      lastNode.next = null
    }
  }
  insertLast(data) {
    if (!this.head) this.insertFirst(data)
    else {
      let currentLastNode = this.getLast()
      let newLastNode = new Node(data)
      currentLastNode.next = newLastNode
    }
  }
  getAt(idx) {
    if (!this.head) return null
    const size = this.size()
    switch (idx) {
      case 0:
        return this.getFirst()
      case (idx > (size - 1)): {
        return null
      }
      case (size - 1): {
        return this.getLast()
      }
      default: {
        let counter = 0
        let currentNode = this.getFirst()
        while (counter < idx) {
          if (!currentNode.next) return null
          currentNode = currentNode.next
          counter++
        }
        return currentNode
      }
    }
  }
  removeAt(idx) {
    if (!this.head) return null
    const size = this.size()
    switch (idx) {
      case (idx >= size): {
        return null
      }
      case 0: {
        if (this.head.next) {
          this.head = this.head.next
        } else {
          this.clear()
        }

      }
      case (size - 1): {
        return this.removeLast()
      }
      default: {
        this.getAt(idx - 1).next = this.getAt(idx + 1)
      }
    }
  }
  insertAt(data, idx) {
    if (idx === 0) {
      this.insertFirst(data)
      return
    }
    const size = this.size()
    if (idx >= size) {
      this.insertLast(data)
      return
    }
    const newNode = new Node(data)
    let prevNode = this.getAt(idx - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
  }
  forEach(fn) {
    if (!this.head) return null
    else {
      let currentNode = this.head
      while (currentNode) {
        fn(currentNode)
        currentNode = currentNode.next
      }
    }
  }
  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}


module.exports = { Node, LinkedList };
