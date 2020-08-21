function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  };
}

function saveReview(review, array) {
  if (!array.includes(review)) {
    array.push(review);
  };
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  };
}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
  return book.pageCount;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
