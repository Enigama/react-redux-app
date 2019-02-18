
const booksRequsted = () => {
  return {
    type: 'FETCH__BOOKS_REQUEST',
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH__BOOKS_LOAD',
    payload: newBooks
  }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequsted());
  bookstoreService.getBooks()
    .then((data) => {
      dispatch(booksLoaded(data))
    })
};

export {
  fetchBooks
}
