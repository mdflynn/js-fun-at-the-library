var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, morning) {
    return morning ? `Good morning, ${name}!` : `Hello, ${name}!`;
  }

  findBook(bookTitle) {
    var genres = Object.keys(this.library.shelves);
    for (var i = 0; i < genres.length; i++) {
      for (var j = 0; j < this.library.shelves[genres[i]].length; j++) {
        if (bookTitle === this.library.shelves[genres[i]][j].title) {
          this.library.shelves[genres[i]].splice(i, 1);
          return `Yes, we have ${bookTitle}`;
        }
      }
    }
    return `Sorry, we do not have ${bookTitle}`;
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * 0.25);
  }
}

module.exports = Librarian;
