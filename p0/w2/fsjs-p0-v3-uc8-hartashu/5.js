function sortArrayAscending(arr) {
  let newArray = [...arr];

  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      let temp = '';
      if (newArray[i] > newArray[j]) {
        temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
    }
  }

  return newArray;
}

function sorting(array) {
  // your code here

  let newArray = [...array];

  newArray = sortArrayAscending(newArray);

  return newArray;

}

function sortingByType(array) {
  // your code here

  let arrNumber = [];
  let arrString = [];
  let arrBoolean = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') arrNumber.push(array[i]);
    else if (typeof array[i] === 'string') arrString.push(array[i]); 
    else if (typeof array[i] === 'boolean') arrBoolean.push(array[i]);
  }
  
  arrNumber = sorting(arrNumber);
  arrString = sorting(arrString);
  arrBoolean = sorting(arrBoolean);

  let result = [];

  if (arrNumber.length === 0 && arrString.length === 0 && arrBoolean.length === 0) {
    return [];
  }

  result.push(arrNumber, arrString, arrBoolean);
  
  return result;
}

function isEmptyArr(arr) {
  return arr.length === 0 ? 'true' : 'false';
}

function sortAllClean(array) {
  //your code here 

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== null && array[i] !== undefined) {
      if (!(Array.isArray(array[i]) && array[i].length === 0)) {
        if (!(typeof array[i] === 'number' && isNaN(array[i]))) {
          newArray.push(array[i]);
        }
      }
    }
  }

  newArray = sortingByType(newArray);

  return newArray;
}


//do not change the code below
let inputArrSorting = [2, 4, 6, 8, 2, 3];
let inputArrSortingType = [1, 3, "array", -45, true, false, "big"];
let inputArrSortingClean = [undefined, null, 456, "def", NaN, [], true, 123, "bcd", false];
console.log(sorting(inputArrSorting)); //[ 2, 2, 3, 4, 6, 8 ]
console.log(sortingByType(inputArrSortingType)); // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
console.log(sortAllClean(inputArrSortingClean)); //[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
console.log(sortAllClean([NaN, undefined])); // []





//do not change the code below
module.exports = { sorting, sortingByType, sortAllClean }