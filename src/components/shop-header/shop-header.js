import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './shop-header.css';

class ShopHeader extends Component{
  render() {
    const {price, count} = this.props
    const info = price > 0 ? ` ${count} items ($${price})` : null
    // console.log(price, count);

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


export default ShopHeader;
// https://github.com/rt2zz/redux-persist
