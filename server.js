const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//console.log that your server is up and running
app.listen(port, ()=>console.log(`listening on port ${port}`));

const books = {
    '1984' : 'George Orwell',
    'In Search of Lost Time' : 'Marcel Proust',
    'Don Quixote' : 'Miguel de Cervantes',
    'Ulysses' : 'James Joyce',
    'The Great Gatsby' : 'F. Scott Fitzgerald',
    'Moby Dick' : 'Herman Melville',
    'Hamlet' : 'William Shakespeare',
    'War and Peace' : 'Leo Tolstoy',
    'The Odyssey' : 'Homer',
    'The Divine Comedy' : 'Dante Alighieri',
    'One Hundred Years of Solitude' : 'Gabriel Garcia Marquez',
    'The Brothers Karamazov' : 'Fyodor Dostoyevsky',
    'Madame Bovary' : 'Gustave Flaubert',
    'The Adventures of Huckleberry Finn' : 'Mark Twain',
    'The Illiad' : 'Homer',
    'Lolita' : 'Vladimir Nabokov',
    'Crime and Punishment' : 'Fyodor Dostoyevski',
    'Alice\'s Adventures in Wonderland' : 'Lewis Carroll',
    'Pride and Prejudice' : 'Jane Austen'
}


app.get('/:title', function (req, res) {
    const ans = books[req.params.title];
    res.send(ans)
});
