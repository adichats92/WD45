const booksForm = document.querySelector('.books-form');
const booksList = document.querySelector('.books-list');
const books = [{ title: 'js is Fun', isRead: true, date: '20-10-2023' }];
// [{title:"Asdads",isRead:false,date:""},......]
// #1
const addBook = event => {
  event.preventDefault();
  const title = event.target.title.value;
  const date = event.target.date.value;
  if (title && date) {
    books.push({ title: title, isRead: false, date: date });
    render();
  } else {
    alert('Title and date are needed!!!');
  }
  event.target.reset();
};

//#2
const bookButtonHandler = () => {
  console.log('I was clicked!!!!');
};
const createBookEle = book => {
  // book => {title:"Asdads",isRead:false,date:""}
  const li = document.createElement('li');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const button = document.createElement('button');
  h2.textContent = book.title;
  p.textContent = book.date;
  button.textContent = 'clickMe';
  p.style.color = book.isRead ? 'green' : 'red';
  button.addEventListener('click', bookButtonHandler);
  li.append(h2);
  li.append(p);
  li.append(button);
  return li;
};
const render = () => {
  booksList.innerHTML = '';
  books.forEach(book => {
    console.log('BOOK??', book);
    const listItem = createBookEle(book);
    booksList.append(listItem);
  });
};

booksForm.addEventListener('submit', addBook);
render();
