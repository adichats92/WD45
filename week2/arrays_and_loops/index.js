console.log(3 + Number('4'));
const num = 0.1 + 0.2;
console.log(num);
console.log(Math.round(num));
console.log(num.toFixed(1));
console.log(isNaN(3 + Number('a')));
// Arrays

const arr = ['a', 'b', 'c', 'd'];
console.log(arr);
console.log(arr.length);
console.log(arr[0], arr[arr.length - 1], arr[4]);
console.log('new ES get last element method!!', arr.at(-1));
// add to the end of array
arr.push('e');
console.log(arr);
// remove from the end of array
arr.pop();
console.log(arr);
// add to the start of array
arr.unshift('e');
console.log(arr);
// remove from the start of array
arr.shift();
console.log(arr);

// add/edit value at index
arr[0] = 'i';
arr[4] = 't';
console.log(arr);
// Loops

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (i % 2 === 0) {
    console.log(`The Element Value is ${element} At index ${i}`);
  } else {
    console.log('ODDDD!!!');
  }
}

let i = 100;
while (i <= 200) {
  console.log(i);
  i += 20;
}
// Functions
// function expression
function welcomeUser(username) {
  console.log(`Hello ${username}`);
}

function getSum(a, b) {
  const sum = a + b;
  return sum;
  // return a + b
}

// function call
welcomeUser('JohnDoe');
getSum(5, 5); // this will not show anything because we need to console the returned value
const sum = getSum(2, 4);
console.log(getSum(3, 6));
console.log(sum);

// function statement

const getAvg = (a, b) => {
  return getSum(a, b) / 2;
};

console.log(getAvg(4, 6));

// recursive functions

function sumRec(num) {
  // stopping condition
  if (num === 1) {
    return 1;
  }
  // return the same 
  return num + sumRec(num - 1);
}
console.log(sumRec(5)); // 5 + 4 + 3 + 2 + 1 = 15
