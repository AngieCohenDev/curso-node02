const booksDb = [
    {
        id : 1,
        titulo : 'La sombre del viento'
    },
    {
        id : 2,
        titulo : 'El forastero misterioso' 
    },
    {
        id : 3,
        titulo : 'Matar a un ruiseñor'
    }
];

const getBook = (id, callback) =>{
    const book = booksDb.find((book) => book.id === id);

    if(!book){
        const error = new Error();
        error.message = 'No se encontro el libro';
        return callback(error);
    }

    callback(null, book);
}


getBook(10, (err, book) => {
    if (err){
        return console.log(err.message);
    }

    return console.log(book);
})
