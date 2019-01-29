
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

export {
  booksLoaded,
  booksRequsted
}