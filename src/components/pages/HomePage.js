import React from 'react'
import BookList from '../bookList/bookList'

const HomePage = () => {
  const books = [
    { id: 1, title: 'Production-ready Microservices', author: 'Susan J. Flower'},
    { id: 2, title: 'Release It!', author: 'Michael T. Nygard!'},
  ]
  return (
    <BookList books={books}/>

  )
}

export default HomePage