const initialState = {
  books: [],
  loading: true,
  cart: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_BUY':
      console.log(action.payload);
      return {
        books: state.books,
        loading: false,
        cart: action.payload
      }
    case 'BOOKS_REQUESTED':
      return {
        books: [],
        loading: true,
        cart: state.cart
      }
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        cart: state.cart
      }
    default:
      return state
  }
}

export default reducer