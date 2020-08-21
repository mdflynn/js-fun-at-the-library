function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}

function addBook(location, bookObject) {
  location.shelves[bookObject.genre].push(bookObject);
}

function checkoutBook(location, bookTitle) {
  // for (var j = 0; j < location.shelves.length; j++) {
  //   for (var i = 0; i < location.shelves[j].length; i++) {
  //     if (location.shelves[j][i].title === bookTitle) {
  //       location.shelves[j].splice(i, 1);
  //       return `You have now checked out ${bookTitle} from the ${location.name}`
  //       }
  //     } return `Sorry, there are currently no copies of ${bookTitle} available at the ${location.name}`
  //   }
  // }
  // for in loop?



  for (var i = 0; i < location.shelves.fantasy.length; i++) {
    if (location.shelves.fantasy[i].title === bookTitle) {
      location.shelves.fantasy.splice(i, 1);
      return `You have now checked out ${bookTitle} from the ${location.name}`
      }
    } for (var i = 0; i < location.shelves.fiction.length; i++) {
        if (location.shelves.fiction[i].title === bookTitle) {
          location.shelves.fiction.splice(i, 1);
          return `You have now checked out ${bookTitle} from the ${location.name}`
      }
    } for (var i = 0; i < location.shelves.nonFiction.length; i++) {
      if (location.shelves.nonFiction[i].title === bookTitle) {
        location.shelves.nonFiction.splice(i, 1);
        return `You have now checked out ${bookTitle} from the ${location.name}`
      }
    } return `Sorry, there are currently no copies of ${bookTitle} available at the ${location.name}`
  }

  //refactor!!!!

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
