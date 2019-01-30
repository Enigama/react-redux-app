const initialState = {
  books: [],
  loading: true,
  cart: null,
  count: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_BUY':
      return {
        books: state.books,
        loading: false,
        cart: action.payload,
        count: action.count,
      }
    case 'BOOKS_REQUESTED':
      return {
        books: [],
        loading: true,
        cart: state.cart,
        count: state.count,
      }
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        cart: state.cart,
        count: state.count,
      }
    default:
      return state
  }
}

export default reducer