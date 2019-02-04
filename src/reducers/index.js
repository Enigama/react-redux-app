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
      const item = action.payload.orderBook
      const newOrderBook = {
        ...state.orderBook,
        [item.id]: item
      }
      return { ...state, ...action.payload, orderBook: newOrderBook }

    case 'BOOKS_REQUESTED':
      return {...state}
    case 'BOOKS_LOADED':
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default reducer
