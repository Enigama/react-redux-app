import updateBookList from './book-list'
import updaterShoppingCart from './shopping-cart'

const reducer = (state, action) => {
    return {
      bookList: updateBookList(state, action),
      shoppingCart: updaterShoppingCart(state, action)
    }
}

export default reducer
