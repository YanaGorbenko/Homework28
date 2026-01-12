const books = [
  {
    id: 1,
    title: 'JavaScript для початківців',
    author: 'Іван Петренко',
    year: 2021,
    description:
      'Книга знайомить з основами JavaScript та пояснює ключові поняття простою мовою.',
  },

  {
    id: 2,
    title: 'Сучасний JavaScript',
    author: 'Олена Коваль',
    year: 2020,
    description:
      'Посібник з сучасних можливостей JavaScript та прикладів їх використання.',
  },

  {
    id: 3,
    title: 'Веб-розробка з нуля',
    author: 'Андрій Мельник',
    year: 2019,
    description:
      'Книга про створення веб-застосунків з використанням HTML, CSS та JavaScript.',
  },
];

const root = document.getElementById('root');
const titleOfPage = document.createElement('h1');
titleOfPage.textContent = 'Список книг';
root.prepend(titleOfPage);

const bookContainer = document.createElement('div');
bookContainer.className = 'books-container';
root.appendChild(bookContainer);

const listContainer = document.createElement('div');
listContainer.className = 'list-container';
bookContainer.appendChild(listContainer);

const bookList = document.createElement('ul');
bookList.className = 'book-list';
listContainer.appendChild(bookList);

const newBookButton = document.createElement('button');
newBookButton.className = 'new-book-button';
newBookButton.textContent = 'Додати нову книгу';
listContainer.appendChild(newBookButton);

const bookInfo = document.createElement('div');
bookInfo.className = 'book-info';
bookContainer.appendChild(bookInfo);

function renderBookList() {
  bookList.innerHTML = '';
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    bookList.appendChild(listItem);

    const titleOfBook = document.createElement('p');
    titleOfBook.className = 'book-title';
    titleOfBook.textContent = book.title;
    listItem.appendChild(titleOfBook);

    const buttonForBook = document.createElement('button');
    buttonForBook.className = 'book-button';
    buttonForBook.textContent = 'Переглянути деталі';
    listItem.appendChild(buttonForBook);

    buttonForBook.addEventListener('click', () => {
      showBookDetails(book.id);
    });
  });
}

function showBookDetails(idOfBook) {
  const book = books.find(b => b.id === idOfBook);

  if (book) {
    bookInfo.innerHTML = '';
    const bookTitle = document.createElement('h2');
    bookTitle.className = 'book-title';
    bookTitle.textContent = book.title;
    bookInfo.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.textContent = 'Автор: ' + book.author;
    bookInfo.appendChild(bookAuthor);

    const bookYear = document.createElement('p');
    bookYear.className = 'book-year';
    bookYear.textContent = 'Рік видання: ' + book.year;
    bookInfo.appendChild(bookYear);

    const bookDescripton = document.createElement('p');
    bookDescripton.className = 'book-dexcription';
    bookDescripton.textContent = book.description;
    bookInfo.appendChild(bookDescripton);
  }
}

function showAddBookForm() {
  bookInfo.innerHTML = '';
  const form = document.createElement('form');
  form.className = 'form';
  bookInfo.appendChild(form);

  const titleLabel = document.createElement('label');
  titleLabel.className = 'form-label';
  titleLabel.textContent = 'Введіть назву книги';
  titleLabel.htmlFor = 'title';
  form.appendChild(titleLabel);

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title';
  titleInput.name = 'title';
  form.appendChild(titleInput);

  const authorLabel = document.createElement('label');
  authorLabel.className = 'form-label';
  authorLabel.textContent = 'Введіть автора книги';
  authorLabel.htmlFor = 'author';
  form.appendChild(authorLabel);

  const authorInput = document.createElement('input');
  authorInput.type = 'text';
  authorInput.id = 'author';
  authorInput.name = 'author';
  form.appendChild(authorInput);

  const yearLabel = document.createElement('label');
  yearLabel.className = 'form-label';
  yearLabel.textContent = 'Введіть рік видання книги';
  yearLabel.htmlFor = 'year';
  form.appendChild(yearLabel);

  const yearInput = document.createElement('input');
  yearInput.type = 'text';
  yearInput.id = 'year';
  yearInput.name = 'year';
  form.appendChild(yearInput);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.className = 'form-label';
  descriptionLabel.textContent = 'Введіть опис книги:';
  descriptionLabel.htmlFor = 'description';
  form.appendChild(descriptionLabel);

  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'description';
  descriptionInput.name = 'description';
  descriptionInput.rows = 4;
  form.appendChild(descriptionInput);

  const submitButton = document.createElement('button');
  submitButton.className = 'submit-button';
  submitButton.textContent = 'Відправити';
  form.appendChild(submitButton);

  const clearErrors = () => {
    const errors = form.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    clearErrors(); // Очищаємо старі помилки

    let isValid = true;
    if (!titleInput.value.trim()) {
      const errorMesageTitle = document.createElement('p');
      errorMesageTitle.textContent = 'Назва книги має бути введена';
      errorMesageTitle.className = 'error-message';
      form.insertBefore(errorMesageTitle, titleInput);
      isValid = false;
    }
    if (!authorInput.value.trim()) {
      const errorMesageAuthor = document.createElement('p');
      errorMesageAuthor.textContent = 'Автор книги має бути введений';
      errorMesageAuthor.className = 'error-message';
      form.insertBefore(errorMesageAuthor, authorInput);
      isValid = false;
    }
    const yearValue = yearInput.value.trim();
    if (!yearValue) {
      const errorMessageYear = document.createElement('p');
      errorMessageYear.textContent = 'Рік видання книги має бути введений';
      errorMessageYear.className = 'error-message';
      form.insertBefore(errorMessageYear, yearInput);
      isValid = false;
    } else if (isNaN(yearValue) || !Number.isInteger(Number(yearValue))) {
      const errorMessageYear = document.createElement('p');
      errorMessageYear.textContent = 'Рік видання має бути числом';
      errorMessageYear.className = 'error-message';
      form.insertBefore(errorMessageYear, yearInput);
      isValid = false;
    }
    if (!descriptionInput.value.trim()) {
      const errorMesageDescription = document.createElement('p');
      errorMesageDescription.textContent = 'Опис книги має бути введений';
      errorMesageDescription.className = 'error-message';
      form.insertBefore(errorMesageDescription, descriptionInput);
      isValid = false;
    }
    if (isValid) {
      const newId =
        books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;

      const newBook = {
        id: newId,
        title: titleInput.value.trim(),
        author: authorInput.value.trim(),
        year: parseInt(yearInput.value),
        description: descriptionInput.value.trim(),
      };

      books.push(newBook);

      renderBookList();
      message();
    }
  });
}

function message() {
  bookInfo.innerHTML = '';
  const message = document.createElement('p');
  message.className = 'message';
  message.textContent = 'Вітаю! Книга була успішно додана до списку)';
  bookInfo.appendChild(message);
}
newBookButton.addEventListener('click', showAddBookForm);

renderBookList();
