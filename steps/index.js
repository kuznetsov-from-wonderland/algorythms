// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function stepsIterative(n) {
  const printRow = (sharps, spaces) => {
    const res = []
    for (let i = 0; i < sharps; i++) {
      res.push('#')
    }
    for (let i = 0; i < spaces; i++) {
      res.push(' ')
    }
    return res.join('')
  }
  for (let i=1; i <= n; i++) {
    console.log(printRow(i, n-i))
  }

}
const printRow = (sharps, spaces) => {
  const res = []
  for (let i = 0; i < sharps; i++) {
    res.push('#')
  }
  for (let i = 0; i < spaces; i++) {
    res.push(' ')
  }
  console.log(res.join(''))
}

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;
