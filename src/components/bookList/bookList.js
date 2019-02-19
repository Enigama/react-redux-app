import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'

import { fetchBooks, bookAddedToCart } from '../../actions'
import compose from '../../utils'

import BookListItem from '../bookListItem/bookListItem'
import './bookList.css'
import Spinner from "../spinner";

const BookList = ({ books, onAddedToCart }) => {
  return(
    <ul className='book-list'>
      {
        books.map((book) => {
          return(
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart ={() => onAddedToCart(book.id)}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

class BookListContainer extends Component{
  componentDidMount () {
    this.props.fetchBooks()
  }

  render () {
    const { books, loading, onAddedToCart } = this.props
    if (loading) {
      return <Spinner/>
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
  }
}

const mapStateToProps = ({ books, orderBook, price, count}) => {
  return { books, orderBook, price, count}
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }
}

// const mapDispatchToProps = {
  // return{
  //   booksLoaded: (newBooks) => {
  //     dispatch({
  //       type: 'BOOKS_LOADED',
  //       payload: newBooks
  //     })
  //   }
  // }

  // return {
  //   booksLoaded: (newBooks) => {
  //     dispatch(booksLoaded(newBooks))
  //   }
  // }

  // return bindActionCreators({
  //   booksLoaded
  // }, dispatch)
  //last return
//   booksLoaded,
//   booksRequsted,
// }



export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)

// withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))
