const body = document.querySelector('body'); // the first match
// const body = document.getElementsByTagName('body'); // array of matched tags
// const container = document.getElementsByClassName('container'); // array of elements
// const container = document.querySelectorAll('container'); // array of elements

const list = document.getElementById('nav-list'); // one element
const containerNode = document.querySelector('.container');
console.log('🚀 ~ file: script.js:3 ~ container:', containerNode);
console.log(body);
// add inline style
body.style.backgroundColor = '#4f2';
// add class name to the tag
// body.classList.add('app');

// Create Element
const paragraph = document.createElement('p');
paragraph.innerText = 'This is a new p from JS';
// paragraph.innerHTML = "aaa<a href='http://www'>here</a>";
console.log('🚀 ~ file: script.js:17 ~ paragraph:', paragraph);
paragraph.style.color = 'red';
containerNode.append(paragraph);

// ADD event

paragraph.addEventListener('click', () => {
  alert('Hello');
});
