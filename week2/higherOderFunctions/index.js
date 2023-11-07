const arrowFunc = (a, b) => {
  return a + b;
};
const arrowFunc2 = (a, b) => a + b;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ForEach
// no return!!!
arr.forEach((value, index) => {
  // arr[index] === value !== value[index]
  console.log('THE VALUE IS ', value, 'At index', index);
});
arr.forEach(value => console.log('THE VALUE IS ', value));

// Map
// return a new array
// apply effect on all/some elements
const newArr = arr.map((value, index) => {
  return value * 2;
});
const oddEvenArr = arr.map(value => (value % 2 === 0 ? value * 2 : value * 3));
console.log('ODDEVENT', oddEvenArr);
console.log(arr, newArr);
const tempArr = [];
arr.forEach(value => tempArr.push(value * 3));
console.log(tempArr);
// Filter
// return a new array
const evenArr = arr.filter(number => number % 2 === 0);
console.log('🚀 ~ file: index.js:31 ~ evenArr:', evenArr);
const oddArr = arr.filter(ele => {
  return ele % 2 !== 0;
});
console.log('🚀 ~ file: index.js:32 ~ oddArr ~ oddArr:', oddArr);

//Reduce
// reduce the array to 1 element
const sum = arr.reduce((acc, value, index) => {
  console.log('WHAT IS ACC?', acc);
  return acc + value;
}, 0);
console.log('🚀 ~ file: index.js:42 ~ sum ~ sum:', sum);

// Sort
// inplace change of the array
arr.sort((a, b) => b - a);
console.log(arr);
// Find
// return found element
const num = arr.find(value => value === 12);
console.log('🚀 ~ file: index.js:52 ~ num:', num);
const evenNum = arr.find(value => value % 2 === 0);
console.log('🚀 ~ file: index.js:53 ~ evenNum:', evenNum);

// Some
// return Bool
// at least one element apply the condition
const even = arr.some(element => element % 2 === 0);
console.log('🚀 ~ file: index.js:58 ~ even:', even);
// Every
// return Bool
// all one element apply the condition
const odd = arr.every(element => element % 2 !== 0);
console.log('🚀 ~ file: index.js:61 ~ odd:', odd);

// Includes
//return Bool
// search for the element in the array
console.log(arr);
console.log(arr.includes(5));

