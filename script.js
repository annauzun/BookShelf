const books = [
    {
        title: 'Живая шляпа и другие любимые рассказы',
        authors: 'Носов Николай Николаевич',
        editor: 'Махаон',
        year: '2022',
        image: 'https://img3.labirint.ru/rc/44e17656f0668521f8a23c6d1dfb2a62/363x561q80/books92/911551/cover.jpg?1682090795'
    },
 
    {
        title: 'Денискины рассказы',
        authors: 'Драгунский Виктор Юзефович',
        year: '2022',
        editor: 'Махаон',
        image: 'https://img4.labirint.ru/rc/9b06922b3062dbd468d68baf98d05989/363x561q80/books92/911472/cover.jpg?1682090772'
    },
 
    {
        title: 'Что я видел',
        authors: 'Житков Борис Степанович',
        editor: 'Стрекоза',
        year: '2017',
        image: 'https://img4.labirint.ru/rc/098e2a01f7958ebc673b00faa1b429f2/363x561q80/books61/600816/cover.png?1575448326'
    },
 
    {
        title: 'Приключения Незнайки и его друзей',
        authors: 'Носов Николай Николаевич',
        editor: 'Махаон',
        year: '2022',
        image: 'https://img4.labirint.ru/rc/b8a67479de868380e5b692624880efac/363x561q80/books35/348836/cover.jpg?1686223741'
    },

    {
        title: 'В стране невыученных уроков',
        authors: 'Гераскина Лия Борисовна',
        editor: 'Азбука',
        year: '2023',
        image: 'https://img3.labirint.ru/rc/bf85ec6bb781f466a088d4dc8d250c68/363x561q80/books93/925537/cover.jpg?1680791181'
    },
 
    {
        title: 'Айболит и другие сказки',
        authors: 'Чуковский Корней Иванович',
        editor: 'Стрекоза',
        year: '2023',
        image: 'https://img4.labirint.ru/rc/ab8890a71acdff5bbd8f0c346eab429c/363x561q80/books94/931026/cover.jpg?1675869938'
    }
 
]

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
                    <button class="change-button">Изменить</button>
                    <button class="delete-button">Удалить</button>
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
}

renderBooks()