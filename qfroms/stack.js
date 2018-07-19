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
