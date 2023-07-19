let books = [
    {
        id: 1,
        title: 'Живая шляпа и другие любимые рассказы',
        authors: 'Носов Николай Николаевич',
        editor: 'Махаон',
        year: '2022',
        image: 'https://img3.labirint.ru/rc/44e17656f0668521f8a23c6d1dfb2a62/363x561q80/books92/911551/cover.jpg?1682090795'
    },
 
    {
        id: 2,
        title: 'Денискины рассказы',
        authors: 'Драгунский Виктор Юзефович',
        year: '2022',
        editor: 'Махаон',
        image: 'https://img4.labirint.ru/rc/9b06922b3062dbd468d68baf98d05989/363x561q80/books92/911472/cover.jpg?1682090772'
    },
 
    {
        id: 3,
        title: 'Что я видел',
        authors: 'Житков Борис Степанович',
        editor: 'Стрекоза',
        year: '2017',
        image: 'https://img4.labirint.ru/rc/098e2a01f7958ebc673b00faa1b429f2/363x561q80/books61/600816/cover.png?1575448326'
    },
 
    {
        id: 4,
        title: 'Приключения Незнайки и его друзей',
        authors: 'Носов Николай Николаевич',
        editor: 'Махаон',
        year: '2022',
        image: 'https://img4.labirint.ru/rc/b8a67479de868380e5b692624880efac/363x561q80/books35/348836/cover.jpg?1686223741'
    },

    {
        id: 5,
        title: 'В стране невыученных уроков',
        authors: 'Гераскина Лия Борисовна',
        editor: 'Азбука',
        year: '2023',
        image: 'https://img3.labirint.ru/rc/bf85ec6bb781f466a088d4dc8d250c68/363x561q80/books93/925537/cover.jpg?1680791181'
    },
 
    {
        id: 6,
        title: 'Айболит и другие сказки',
        authors: 'Чуковский Корней Иванович',
        editor: 'Стрекоза',
        year: '2023',
        image: 'https://img4.labirint.ru/rc/ab8890a71acdff5bbd8f0c346eab429c/363x561q80/books94/931026/cover.jpg?1675869938'
    }
 
]

function openModal() {
    document.getElementById('add-newBook').style.display = "flex"
}

function closeModal() {
    document.getElementById('add-newBook').style.display = "none"
}

const openModalButton = document.getElementById('add-modal-button')
openModalButton.addEventListener('click', openModal)

const closeModalButton = document.getElementById('close-modal-button')
closeModalButton.addEventListener('click', closeModal)

function saveToLocalStorage() {
    const booksJson = JSON.stringify(books)
    localStorage.setItem('books', booksJson)
}

const container = document.getElementById('container')

function renderBooks() {
    container.innerHTML = ""
    books.forEach((book) => {
        container.innerHTML += `
            <div class="book" id="book">
                <img src="${book.image}" class="book-image"/>
                <p class="book-title">${book.title}</p>
                <p class="book-year">${book.year}</p>
                <p class="book-authors">${book.authors}</p>
                <p class="book-editor">${book.editor}</p>

                <div class="buttons">
                    <button onclick='updateBook(${book.id})'>Изменить</button>
                    <button onclick='deleteBook(${book.id})'>Удалить</button>

                </div>
            </div>
        `
    })

}

function clearForm() {
    document.getElementById('title').value = ""
    document.getElementById('authors').value = ""
    document.getElementById('editor').value = ""
    document.getElementById('year').value = ""
    document.getElementById('image').value = ""
}

function addBook() {
    const titleValue = document.getElementById('title').value
    const authorsValue = document.getElementById('authors').value
    const editorValue = document.getElementById('editor').value
    const yearValue = document.getElementById('year').value
    const imageValue = document.getElementById('image').value

    const book = {
        title: titleValue,
        authors: authorsValue,
        editor: editorValue,
        year: yearValue,
        image: imageValue
    }

    books.push(book)
    renderBooks()
    clearForm()
    closeModal()
    saveToLocalStorage()
}

function deleteBook(id) {
    const book = books.find((b) => {
        return b.id === id
    })

    const bookIndex = books.indexOf(book)

    books.splice(bookIndex, 1)
    renderBooks() 
    saveToLocalStorage()
}

const addBookButton = document.getElementById('save-button')
addBookButton.addEventListener('click', addBook)


const updateWindow = document.getElementById('update-book')

function updateInput(book) {
    document.getElementById('update-title').value = book.title
    document.getElementById('update-authors').value = book.authors
    document.getElementById('update-editor').value = book.editor
    document.getElementById('update-year').value = book.year
    document.getElementById('update-image').value = book.image

}

function updateBook(id) {
    updateWindow.style.display = "flex"

    const book = books.find((b) => {
        return b.id === id
    })

    updateInput(book)

    const update = document.getElementById('update-button')
    update.addEventListener('click', makeUpdate)
}

function makeUpdate(id) {

    let book = books.find((b) => {
        return b.id === id
    })

    const bookIndexUpdate = books.indexOf(book)
   
    const updateTitle = document.getElementById('update-title').value
    const updateAuthors = document.getElementById('update-authors').value
    const updateEditor = document.getElementById('update-editor').value
    const updateYear = document.getElementById('update-year').value
    const updateImage = document.getElementById('update-image').value
    
    const updatedBook = {
        title: updateTitle,
        authors: updateAuthors,
        editor: updateEditor,
        year: updateYear,
        image: updateImage
    }

    books.splice(bookIndexUpdate, 1, updatedBook)
    renderBooks()
    saveToLocalStorage()
    closeUpdateWindow()
}

const closeUpdateButton = document.getElementById('close-update-button')
closeUpdateButton.addEventListener('click', closeUpdateWindow)

function closeUpdateWindow() {
    updateWindow.style.display = "none"
}

const booksJson = localStorage.getItem('books')
    if (booksJson) {
        books = JSON.parse(booksJson);
    }
    
renderBooks()