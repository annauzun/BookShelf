//счетчик для id книг
let count = 1

//массив книг
let books = [
    {
        id: count++,
        title: 'Живая шляпа и другие любимые рассказы',
        authors: 'Носов Николай Николаевич',
        editor: 'Махаон',
        year: '2022',
        image: 'https://img3.labirint.ru/rc/44e17656f0668521f8a23c6d1dfb2a62/363x561q80/books92/911551/cover.jpg?1682090795'
    },
 
    {
        id: count++,
        title: 'Денискины рассказы',
        authors: 'Драгунский Виктор Юзефович',
        year: '2022',
        editor: 'Махаон',
        image: 'https://img4.labirint.ru/rc/9b06922b3062dbd468d68baf98d05989/363x561q80/books92/911472/cover.jpg?1682090772'
    },
 
    {
        id: count++,
        title: 'Что я видел',
        authors: 'Житков Борис Степанович',
        editor: 'Стрекоза',
        year: '2017',
        image: 'https://img4.labirint.ru/rc/098e2a01f7958ebc673b00faa1b429f2/363x561q80/books61/600816/cover.png?1575448326'
    },
 
    {
        id: count++,
        title: 'Приключения Незнайки и его друзей',
        authors: 'Носов Николай Николаевич',
        editor: 'Махаон',
        year: '2022',
        image: 'https://img4.labirint.ru/rc/b8a67479de868380e5b692624880efac/363x561q80/books35/348836/cover.jpg?1686223741'
    },

    {
        id: count++,
        title: 'В стране невыученных уроков',
        authors: 'Гераскина Лия Борисовна',
        editor: 'Азбука',
        year: '2023',
        image: 'https://img3.labirint.ru/rc/bf85ec6bb781f466a088d4dc8d250c68/363x561q80/books93/925537/cover.jpg?1680791181'
    },
 
    {
        id: count++,
        title: 'Айболит и другие сказки',
        authors: 'Чуковский Корней Иванович',
        editor: 'Стрекоза',
        year: '2023',
        image: 'https://img4.labirint.ru/rc/ab8890a71acdff5bbd8f0c346eab429c/363x561q80/books94/931026/cover.jpg?1675869938'
    }
 
]

//сохранить изменения в Local Storage
function saveToLocalStorage() {
    const booksJson = JSON.stringify(books) //переводим из JS в JSON
    localStorage.setItem('books', booksJson)
}

//открыть модальное окно при клике на кнопку "добавить книгу"
function openModal() {
    document.getElementById('add-newBook').style.display = "flex"
}

const openModalButton = document.getElementById('add-modal-button')
openModalButton.addEventListener('click', openModal)


//закрыть модальное окно при клике на кнопку "закрыть"
function closeModal() {
    document.getElementById('add-newBook').style.display = "none"
}

const closeModalButton = document.getElementById('close-modal-button')
closeModalButton.addEventListener('click', closeModal)

//найти в HTML контейнер для выгрузки книг
const container = document.getElementById('container')

//"прорисовать"  книги в контейнере
function renderBooks() {
    container.innerHTML = "" //пустой контейнер
    books.forEach((book) => { //карточки для каждой книги
        container.innerHTML += `
            <div class="book" id="book">
                <img src="${book.image}" class="book-image"/>
                <p class="book-title">${book.title}</p>
                <p class="book-year">${book.year}</p>
                <p class="book-authors">${book.authors}</p>
                <p class="book-editor">${book.editor}</p>

                <div class="buttons">
                    <button id="updateBook-${book.id}">Изменить</button>
                    <button id="deleteBook-${book.id}">Удалить</button>
                </div>
            </div>
        `
    })

    //для каждой книги при нажатии на кнопку "изменить" вызывается функция обновления книги
    books.forEach((book) => {
        document.getElementById(`updateBook-${book.id}`).addEventListener('click', () => {
            updateBook(book.id)
            })
    })

    //для каждой книги при нажатии на кнопку "удалить" вызывается функция удаления книги
    books.forEach((book) => {
        document.getElementById(`deleteBook-${book.id}`).addEventListener('click', () => {
            deleteBook(book.id)
            })
    })

}

//очистить форму - поля ввода данных модального окна
function clearForm() {
    document.getElementById('title').value = ""
    document.getElementById('authors').value = ""
    document.getElementById('editor').value = ""
    document.getElementById('year').value = ""
    document.getElementById('image').value = ""
}

//добавить новую книгу при нажатии на кнопку "сохранить"
const addBookButton = document.getElementById('save-button')
addBookButton.addEventListener('click', addBook)

function addBook() { //получить значения из полей ввода данных модального окна
    const titleValue = document.getElementById('title').value
    const authorsValue = document.getElementById('authors').value
    const editorValue = document.getElementById('editor').value
    const yearValue = document.getElementById('year').value
    const imageValue = document.getElementById('image').value

    const book = { //новая книга с полученными данными
        id: count++,
        title: titleValue,
        authors: authorsValue,
        editor: editorValue,
        year: yearValue,
        image: imageValue
    }

    books.push(book) //добавить новую книгу в конец массива
    renderBooks() //"прорисовать" новый массив с изменениями
    clearForm() //очистить поля ввода
    closeModal() //закрыть модальное окно
    saveToLocalStorage() //сохранить изменения в Local Storage
}

//удалить книгу, определенную по id
function deleteBook(id) {
    
    const book = books.find((b) => { //найти книгу по id
        return b.id === id
    })

    const bookIndex = books.indexOf(book) //определить индекс книги в массиве
    
    books.splice(bookIndex, 1) //удалить 1 книгу из массива начиная с указанного индекса

    renderBooks() //"прорисовать" новый массив с изменениями
    saveToLocalStorage() //сохранить изменеия в Local Storage
}

//переводим из JSON в JS
const booksJson = localStorage.getItem('books')
    if (booksJson) {
        books = JSON.parse(booksJson);
    }

//получить данные полей книги, которую будем обновлять
function updateInput(book) {
    document.getElementById('update-title').value = book.title
    document.getElementById('update-authors').value = book.authors
    document.getElementById('update-editor').value = book.editor
    document.getElementById('update-year').value = book.year
    document.getElementById('update-image').value = book.image
}

//найти элемент окна обновления книги
const updateWindow = document.getElementById('update-book')

function updateBook(id) {
    updateWindow.style.display = "flex" //открыть модальное окно обновления книги
    
    let book = books.find((u) => { //найти книгу по id
        return u.id === id
    })

    updateInput(book) //получить данные полей ввода конкретной книги

    //при нажатии на кнопку "обновить" вызывается функция обновления данных книги
    const update = document.getElementById('update-button')
    update.addEventListener('click', makeUpdate)
}

//обновить данные книги
function makeUpdate(id) {
  
    const updateTitle = document.getElementById('update-title').value
    const updateAuthors = document.getElementById('update-authors').value
    const updateEditor = document.getElementById('update-editor').value
    const updateYear = document.getElementById('update-year').value
    const updateImage = document.getElementById('update-image').value
    
    const updatedBook = { //создаем новую книгу с обновленными данными
        id: count++,
        title: updateTitle,
        authors: updateAuthors,
        editor: updateEditor,
        year: updateYear,
        image: updateImage
    }

    const book = books.find((b) => { //найти книгу по id
        return b.id === id 
    })

    const bookIndex = books.indexOf(book) //определить индекс книги

    books.splice(bookIndex, 1, updatedBook) //удалить 1 книгу из массива начиная с указанного индекса и заменить ее на книгу с обновленнымии данными
        
    renderBooks() //"прорисовать" новый массив с изменениями
    saveToLocalStorage() //сохранить изменеия в Local Storage
    closeUpdateWindow() //закрыть модальное окно обновленной книги
}

//закрыть модальное окно обновления книги
const closeUpdateButton = document.getElementById('close-update-button')
closeUpdateButton.addEventListener('click', closeUpdateWindow)

function closeUpdateWindow() {
    updateWindow.style.display = "none"
}
    
renderBooks()