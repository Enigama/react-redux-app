
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

const booksBuy = (price) => {
  return {
    type: 'BOOKS_BUY',
    payload: price
  }
}

export {
  booksLoaded,
  booksRequsted,
  booksBuy,
}