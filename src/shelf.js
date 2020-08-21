function shelfBook(bookObject, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(bookObject);
  }
}

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var titleHolder = [];
  for (var i = 0; i < shelf.length; i++) {
    titleHolder.push(shelf[i].title)
  } var title = titleHolder.join(', ');
  return title;
}

function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      return true;
    }
  } return false;
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
