import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { booksLoaded } from '../../actions'

import BookListItem from '../bookListItem/bookListItem'
import './bookList.css'

class BookList extends Component{
  componentDidMount () {
    const { bookstoreService } = this.props
    const data = bookstoreService.getBooks()

    this.props.booksLoaded(data)
  }

  render () {
    const { books } = this.props
    return(
      <ul>
        {
          books.map((book) => {
            return(
              <li key={book.id}>
                <BookListItem book={book}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({ books }) => {
  return { books }
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

  booksLoaded
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))