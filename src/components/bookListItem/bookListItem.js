import React, { Component } from 'react'
import {Link} from "react-router-dom";

import './bookListItem.css'

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book
  return(
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <Link to="/" className="book-title">{title}</Link>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className="btn btn-info add-to-cart"
          onClick={onAddedToCart}
        >Add to cart</button>

class BookListItem extends Component{

  handlerBuy = () => {
    this.props.handlerBuy(this.props.book)
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

export default BookListItem
