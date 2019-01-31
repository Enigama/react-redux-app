const initialState = {
  books: [],
  loading: true,
  orderBook: [],
  price: 0,
  count: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_ORDER':
      console.log("BOOKS_ORDER", action.payload);
      return { ...state, ...action.payload}
    case 'BOOKS_REQUESTED':
      return {...state}
    case 'BOOKS_LOADED':
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default reducer