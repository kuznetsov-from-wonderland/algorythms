// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

function Stack() {
  const data = []
  this.push = push
  this.pop = pop
  this.peek = peek

  function push(record) {
    data.push(record)
  }
  function pop() {
    return data.pop()
  }
  function peek() {
    return data[data.length - 1]
  }
}

module.exports = Stack;
