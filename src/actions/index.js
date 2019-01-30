
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

const booksBuy = (price, count) => {
  return {
    type: 'BOOKS_BUY',
    payload: price,
    count: count,
  }
}

export {
  booksLoaded,
  booksRequsted,
  booksBuy,
}