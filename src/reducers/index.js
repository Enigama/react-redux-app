const initialState = {
  books: [],
  loading: true,
  cart: null,
  count: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_BUY':
      const {price: cart, count } = action.payload
      return {
        books: state.books,
        loading: false,
        cart: cart,
        count: count,
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