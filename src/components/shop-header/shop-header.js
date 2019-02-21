import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

import './shop-header.css';

class ShopHeader extends Component{
  render() {
    const { orderTotal, orderCount } = this.props
    return (
      <header className="shop-header row">
        <Link to="/">
          <div className="logo text-dark" >ReStore</div>
        </Link>
        <Link to="/cart" className='shop-header__cart d-flex align-items-center'>
          <div className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart" />
            {orderCount} items { orderTotal > 0 ? `($${orderTotal})` : null}
          </div>
        </Link>
      </header>
    );
  }
};

const mapStateToProps = ({shoppingCart:{orderTotal, orderCount}}) => {
  return {
    orderTotal,
    orderCount
  }
}

export default connect(mapStateToProps)(ShopHeader);
