import React, {Component} from 'react';
import { Link } from "react-router-dom";

import {connect} from 'react-redux'

import './shop-header.css';


class ShopHeader extends Component{
  render() {
    const {numItems, cart} = this.props
    const price = cart > 0 ? `($${cart})`: null
    return (
      <header className="shop-header row">
        <Link to="/">
          <div className="logo text-dark" >ReStore</div>
        </Link>
        <Link to="/cart">
          <div className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart" />
            {numItems} items {price}
          </div>
        </Link>
      </header>
    );
  }
};

const mapStateToProps = ({cart}) => {
  return {cart}
}

export default connect(mapStateToProps)(ShopHeader);
