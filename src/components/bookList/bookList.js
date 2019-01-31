import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { booksLoaded, booksRequsted, booksBuy } from '../../actions'
import compose from '../../utils'

import BookListItem from '../bookListItem/bookListItem'
import './bookList.css'
import Spinner from "../spinner";

class BookList extends Component{
  state = {
    count: 0
  }

  componentDidMount () {
    const { bookstoreService, booksLoaded, booksRequsted } = this.props
    booksRequsted()
    bookstoreService.getBooks()
      .then((data) => {
        booksLoaded(data)
      })
  }

  handlerBuy = (book) => {
    const { booksBuy, cart } = this.props
    let { count } = this.state
    let price = book.price + cart

    this.setState({count: ++count})
    booksBuy(book, price, count)
  }

  render () {
    const { books, loading } = this.props
    if (loading) {
      return <Spinner/>
    }
    return(
      <ul className='book-list'>
        {
          books.map((book) => {
            return(
              <li key={book.id}>
                <BookListItem book={book} handlerBuy={this.handlerBuy}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({ books, loading, cart }) => {
  return { books, loading, cart }
}
                    // (dispatch) =>
const mapDispatchToProps = {

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
  booksLoaded,
  booksRequsted,
  booksBuy,
}


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)

// withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))