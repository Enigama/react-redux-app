const initialState = {
  books: [],
  loading: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH__BOOKS_REQUEST':
      return {
        books: [],
        loading: true,
      }
    case 'FETCH__BOOKS_LOAD':
      return {
        books: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default reducer
