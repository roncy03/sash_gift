function showBook(bookId) {
    const bookInfo = {
        book1: { title: 'Book 1', description: 'Description for Book 1.' },
        book2: { title: 'Book 2', description: 'Description for Book 2.' },
        // Continue for all books
    };

    const book = bookInfo[bookId];
    document.getElementById('bookInfo').innerHTML = `<h2>${book.title}</h2><p>${book.description}</p>`;
}
