// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = lesser
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  let indexOfmin = 0
  for (let i = 0; i < arr.length; i++) {
    indexOfmin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfmin]) {
        indexOfmin = j
      }
    }
    if (i !== indexOfmin) {
      const less = arr[indexOfmin]
      arr[indexOfmin] = arr[i]
      arr[i] = less
    }
  }
  return arr

}

function mergeSort(arr) {
  if (arr.length === 1) return arr

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))

}

function merge2(left, right) {
  let result = []
  let idx = 0
  while(left[idx] || right[idx]) {
    if (left[idx] < right[idx]) {
      idx <= (left.length - 1) && result.push(left[idx])
      idx <= (right.length - 1) && result.push(right[idx])
    } else {
      idx <= (right.length - 1) && result.push(right[idx])
      idx <= (left.length - 1) && result.push(left[idx])
    }
    idx++
  }
  return result
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
