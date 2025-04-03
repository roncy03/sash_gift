function showBook(bookId) {
    const bookInfo = {
        book1: { 
            title: 'The Great Gatsby',
            description: 'A novel by F. Scott Fitzgerald about the American dream and societal change.'
        },
        book2: { 
            title: 'To Kill a Mockingbird',
            description: 'A novel by Harper Lee, exploring racial injustice in the Deep South.'
        },
        book3: { 
            title: '1984',
            description: 'A dystopian novel by George Orwell, exploring totalitarianism and surveillance.'
        },
        // Add more books here
    };

    const book = bookInfo[bookId];
    document.getElementById('bookInfo').innerHTML = `<h2>${book.title}</h2><p>${book.description}</p>`;
}
