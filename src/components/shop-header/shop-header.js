import React, {Component} from 'react';
import { Link } from "react-router-dom";

import {connect} from 'react-redux'
import {booksBuy} from "../../actions";

import './shop-header.css';


class ShopHeader extends Component{

  state = {
    count: 0
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      this.updateValue()
    }
  }

  updateValue = () => {
    const { booksBuy, orderBook, price } = this.props

    this.setState(({count}) => {
      return {
        count: ++count
      }
    })
    booksBuy(orderBook, price, this.state.count)
  }

  render() {
    const {price} = this.props
    const info = price > 0 ? `${this.state.count} items ($${price})` : null

    return (
      <header className="shop-header row">
        <Link to="/">
          <div className="logo text-dark" >ReStore</div>
        </Link>
        <Link to="/cart">
          <div className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart" />
            {info}
          </div>
        </Link>
      </header>
    );
  }
};

const mapStateToProps = ({ orderBook, price }) => {
  return { orderBook, price}
}

const mapDispatchToProps = {
  booksBuy,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);
// https://github.com/rt2zz/redux-persist