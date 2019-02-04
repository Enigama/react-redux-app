
const booksLoaded = (books, loading) => {
  return {
    type: 'BOOKS_LOADED',
    payload: {books: books, loading: loading}
  }
}

const booksRequsted = () => {
  return {
    type: 'BOOKS_REQUESTED',
  }
}

const booksBuy = (orderBook, price, count) => {
  return {
    type: 'BOOKS_ORDER',
    payload: { orderBook, price, count }
  }
}


export {
  booksLoaded,
  booksRequsted,
  booksBuy
}
