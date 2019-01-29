import React from 'react'
import BookList from '../bookList/bookList'
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable/>
    </div>
  )
}

export default HomePage