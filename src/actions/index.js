
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
}

const booksRequsted = () => {
  return {
    type: 'BOOKS_REQUESTED',
  }
}

const booksBuy = (book, price, count) => {
  console.log(book);
  return {
    type: 'BOOKS_BUY',
    payload: { book, price, count,}
  }
}

export {
  booksLoaded,
  booksRequsted,
  booksBuy,
}