// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunckedArr = []

//   for (let el of array) {
//     const last = chunckedArr[chunckedArr.length - 1]
//     if (!last || last.length === size) {
//       chunckedArr.push([el])
//     } else {
//       last.push(el)
//     }
//   }
//   return chunckedArr
// }

function chunk(array, size) {
  let chunckedArr = []
  let idx = 0
  while (idx < array.length) {
    chunckedArr.push(array.slice(idx, idx + size))
    idx += size
  }
  return chunckedArr
}


module.exports = chunk;
