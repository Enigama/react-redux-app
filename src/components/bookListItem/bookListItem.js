import React, { Component } from 'react'
import {Link} from "react-router-dom";

import {connect} from 'react-redux'
import {booksBuy} from "../../actions";

import './bookListItem.css'

class BookListItem extends Component{

  handlerBuy = () => {
    this.props.handlerBuy(this.props.book.price)
  }

  render() {
    const { title, author, price, coverImage } = this.props.book

    return(
      <div className="book-list-item">
        <div className="book-cover">
          <img src={coverImage} alt="cover" />
        </div>
        <div className="book-details">
          <Link to="/" className="book-title">{title}</Link>
          <div className="book-author">{author}</div>
          <div className="book-price">${price}</div>
          <button
            className="btn btn-info add-to-cart"
            onClick={this.handlerBuy}
          >
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({books}) => {
  return {books}
}

export default BookListItem