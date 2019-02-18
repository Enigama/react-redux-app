import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { booksLoaded, booksRequsted } from '../../actions'
import compose from '../../utils'

import BookListItem from '../bookListItem/bookListItem'
import './bookList.css'
import Spinner from "../spinner";

class BookList extends Component{
  componentDidMount () {
    this.props.fetchBooks()
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
                <BookListItem book={book}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequsted());
      bookstoreService.getBooks()
        .then((data) => {
          dispatch(booksLoaded(data))
        })
    }
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
)(BookList)

// withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))
