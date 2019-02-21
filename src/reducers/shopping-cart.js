const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    //удаление элемента из массива
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if (idx === -1) {
    //добавление нового элемента в массив
    return [
      ...cartItems,
      item
    ]
  }

  //обнавление элемента в массиве
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
}
const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 } = item

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*book.price
  }
}
const updateOrder = (state, bookId, quantity) => {
  const { bookList: {books}, shoppingCart: {cartItems, orderTotal} } = state
  const book = books.find(({id}) => id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId)
  const item = cartItems[itemIndex]
  const newItem = updateCartItem(book, item, quantity)

  return {
    orderTotal: orderTotal + quantity * book.price,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  }
}

const updaterShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    }
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)
    case 'BOOK_REMOVE_FROM_CART':
      return updateOrder(state, action.payload, -1)
    case 'ALL_BOOK_REMOVE_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload)
      return updateOrder(state, action.payload, -item.count)
    default:
      return state.shoppingCart
  }
}
export default updaterShoppingCart;
