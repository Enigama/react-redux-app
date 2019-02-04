import React, {Component} from 'react';
import {connect} from 'react-redux'

import './shopping-cart-table.css';

class ShoppingCartTable extends Component{

  render() {
    const { count, price } = this.props
    const { id, title} = this.props.orderBook
    const item = (
      <tr>
        <td>{ id }</td>
        <td>{ title }</td>
        <td>{ count }</td>
        <td>{ price }</td>

        <td>
          <button className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    )
    return (
      <div className="shopping-cart-table">
        <h2>Your Order</h2>
        <table className="table">
          <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          </thead>

          <tbody>
          { id ? item : null }
          {/*<tr>*/}
            {/*<td>1</td>*/}
            {/*<td>Site Reliability Engineering</td>*/}
            {/*<td>2</td>*/}
            {/*<td>$40</td>*/}

            {/*<td>*/}
              {/*<button className="btn btn-outline-danger btn-sm float-right">*/}
                {/*<i className="fa fa-trash-o" />*/}
              {/*</button>*/}
              {/*<button className="btn btn-outline-success btn-sm float-right">*/}
                {/*<i className="fa fa-plus-circle" />*/}
              {/*</button>*/}
              {/*<button className="btn btn-outline-warning btn-sm float-right">*/}
                {/*<i className="fa fa-minus-circle" />*/}
              {/*</button>*/}
            {/*</td>*/}
          {/*</tr>*/}
          </tbody>
        </table>

        <div className="total">
          { price ? `Total: ${ price }` : null }
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({orderBook, price, count}) => {
  return {
    orderBook,
    price,
    count,
  }
}

export default connect(mapStateToProps)(ShoppingCartTable);
