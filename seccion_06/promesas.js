const booksDb = [
    {
        id : 1,
        titulo : 'La sombre del viento',
        autorId : 1
    },
    {
        id : 2,
        titulo : 'El forastero misterioso',
        autorId : 2
    },
    {
        id : 3,
        titulo : 'Matar a un ruiseñor',
        autorId : 3
    }
];

const autorDb =[
    {
        id : 1,
        nombre : 'Carlos Ruiz Zafon'
    },
    {
        id : 2,
        nombre : 'Mark Taiwan'
    },
    {
        id : 3,
        nombre : 'Harper Lee'
    }
]

const getBook = async (id) =>{

        const book =  booksDb.find((book) => book.id === id);  
        if(!book){
            const error = new Error();
            error.message = 'No se encontro el libro';
            throw error;
        }
        return book;
}

const getAutor = async (id) =>{
    
        const autor = autorDb.find(autor => autor.id === id);  
        if(!autor){
            const error = new Error();
            error.message = 'Autor no encontrado';
            throw error;
        }
        return autor;
}
 const main = async () => {
    
    try {
        const book = await getBook(6);
        const autor = await getAutor(book.autorId);
        console.log(`El libro ${book.titulo} fue escrito por ${autor.nombre}`);
    } catch (error) {
        console.log(error.message);
    }
    
 }

 main();

