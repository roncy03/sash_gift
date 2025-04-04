function revealBook(month) {
    var bookDiv = document.getElementById("book-" + month);
    if (bookDiv.style.display === "none" || bookDiv.style.display === "") {
        bookDiv.style.display = "block";
    } else {
        bookDiv.style.display = "none";
    }
}
