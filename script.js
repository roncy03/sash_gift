// Book suggestions for each month
const bookSuggestions = {
    "January": { title: "The Great Gatsby", description: "A classic tale of the American Dream and the Roaring Twenties." },
    "February": { title: "Pride and Prejudice", description: "A romantic novel by Jane Austen." },
    "March": { title: "1984", description: "A dystopian novel by George Orwell." },
    "April": { title: "To Kill a Mockingbird", description: "A novel about racism and injustice in the American South." },
    "May": { title: "The Catcher in the Rye", description: "A story of adolescent rebellion and existential angst." },
    "June": { title: "The Hobbit", description: "An adventure tale set in the mythical land of Middle-earth." },
    "July": { title: "Moby Dick", description: "A narrative of obsession and revenge." },
    "August": { title: "War and Peace", description: "A historical epic set during the Napoleonic Wars." },
    "September": { title: "Jane Eyre", description: "A gothic novel about a young woman's search for independence." },
    "October": { title: "The Picture of Dorian Gray", description: "A novel about vanity, morality, and consequences." },
    "November": { title: "The Lord of the Rings", description: "An epic high-fantasy adventure." },
    "December": { title: "Harry Potter and the Sorcerer's Stone", description: "A young boy discovers he's a wizard and attends Hogwarts School of Witchcraft and Wizardry." }
};

// Function to display the book info when a month is clicked
function showBook(month) {
    const book = bookSuggestions[month];
    document.getElementById('bookTitle').innerText = book.title;
    document.getElementById('bookDescription').innerText = book.description;
}
