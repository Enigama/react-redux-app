
const booksRequsted = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_LOAD',
    payload: newBooks
  }
}

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
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
