/**1 */
function antrian(line, person) {
  // your code here
  line.push(person);
  return line;
}

let line = ['Rhaegar']
console.log(antrian(line, 'Snow')) // ['Rhaegar', 'Snow']



/**2 */
function panggilAntrian(line) {
  // your code here
  line.shift();
  return line;
}

let line2 = ['Rhaegar', 'Snow'];
console.log(panggilAntrian(line2)); // ['Snow']



/**3 */
function tumpukan(line, title) {
  // your code here
  line.unshift(title);
  return line;
}

let line3 = ['Snow'];
console.log(tumpukan(line3, 'Jon'));// ['Jon', 'Snow']








//do not change the code below
module.exports = {
  antrian, panggilAntrian, tumpukan
}