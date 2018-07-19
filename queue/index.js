// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

function Queue() {
  const data = []
  this.add = add
  this.remove = remove

  function add(record) {
    data.unshift(record)
  }

  function remove() {
    return data.pop()
  }

}

class QueueES6 {
  constructor() {
    this._data = []

  }
  add(record) {
    this._data.unshift(record)
  }

  remove() {
    return this._data.pop()
  }

}

module.exports = QueueES6;
