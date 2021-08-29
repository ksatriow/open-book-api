const { books } = require('./models')

books.create({
    isbn: '979-780-056-8',
    judul: 'Kotlin Coroutines (1st Edition)',
    sinopsi:'Learn everything about kotlin from basic to expert',
    penulis: 'Babic F, Srivastava N',
    genre: 'Android'
})
.then(book => {
    console.log(book)
})
.catch(err => {
    console.log(err)
})