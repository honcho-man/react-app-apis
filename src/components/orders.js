import React from 'react';

function Orders({orders, products, customers, sortTable, actionDest, dest}) {
    return (
        <div className={ ' ' + (dest==='orders'?'d-block':'d-none')}>
            <table className="table table-dark table-hover">
                <thead className='bg-dark table-header'>
                  <tr>
                    <th scope='col' className='header__item'><a onClick={sortTable} className='filter__link filter__link--number' id="order_id" href='#!'>ID</a></th>
                    <th scope='col' className='header__item'><a onClick={sortTable} className='filter__link' id="order_id" href='#!'>Product</a></th>
                    <th scope="col" className='header__item'><a onClick={sortTable} className='filter__link filter__link--number' id='order_name' href="#!">Quantity</a></th>
                    <th scope='col' className='header__item'><a onClick={sortTable} className='filter__link' id="order_stock" href='#!'>User</a></th>
                    <th scope='col' className='header__item'><a onClick={sortTable} className='filter__link filter__link--number' id="order_selling_price" href='#!'>Date</a></th>
                  </tr>
                </thead>
                <tbody className='table-content'>
                  {orders.map((order) => (
                    <tr key={order.order_id} className="table-row">                      
                      <td className='table-data'>{order.order_id}</td>
                      <td className='table-data'>{products.find(item => item.product_id === order.product_id).name}</td>
                      <td className='table-data text-capitalize'>{order.quantity}</td>
                      <td className='table-data text-capitalize'>{customers.find(user => user.user_id === order.user_id).name}</td>
                      <td className='table-data text-capitalize'>{new Date(order.order_date * 1000).toDateString()}</td>
                    </tr>
                  ))}
                </tbody>
            </table>   
        </div>
    )
}

export default Orders;