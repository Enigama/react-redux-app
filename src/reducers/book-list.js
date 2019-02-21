const updateBookList = (state, action) => {

  if (state === undefined) {
    return {
      books: [],
      loading: true,
    }
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
      }
    case 'FETCH_BOOKS_LOAD':
      return {
        ...state,
        books: action.payload,
        loading: false
      }
    default:
      return state.bookList
  }

}
export default  updateBookList;
