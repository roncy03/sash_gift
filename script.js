function revealBook(day) {
    const book = document.getElementById('book-' + day);
    if (book.style.display === "none" || book.style.display === "") {
        book.style.display = "block"; // Reveal the book details
    } else {
        book.style.display = "none"; // Hide the book details
    }
}
