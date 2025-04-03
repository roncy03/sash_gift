function showBook(bookId) {
    const bookInfo = {
        book1: { 
            title: 'Book 1: "The Great Gatsby"',
            description: 'A novel by F. Scott Fitzgerald about the American dream and societal change.'
        },
        book2: { 
            title: 'Book 2: "To Kill a Mockingbird"',
            description: 'A novel by Harper Lee, exploring racial injustice in the Deep South.'
        },
        // Add more books here
    };

    const book = bookInfo[bookId];
    document.getElementById('bookInfo').innerHTML = `<h2>${book.title}</h2><p>${book.description}</p>`;
}
