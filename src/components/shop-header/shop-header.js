import React, {Component} from 'react';
import { Link } from "react-router-dom";

import {connect} from 'react-redux'

import './shop-header.css';


class ShopHeader extends Component{
  render() {
    const {count, cart} = this.props
    const info = cart > 0 && count > 0 ? `${count} items ($${cart})` : null

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

const mapStateToProps = ({ cart, count }) => {
  return { cart, count }
}

export default connect(mapStateToProps)(ShopHeader);
// https://github.com/rt2zz/redux-persist