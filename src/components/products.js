import React from 'react';

function Products({products, sortTable, actionDest, dest}) {
    return (
        <div className={ ' ' + (dest==='products'?'d-block':'d-none')}>
            <table className="table table-dark table-hover">
                <thead className='bg-dark table-header'>
                  <tr>
                    <th scope='col-2' className='header__item'><a onClick={sortTable} className='filter__link filter__link--number' id="product_id" href='#!'>ID</a></th>
                    <th scope="col-10" className='header__item'><a onClick={sortTable} className='filter__link' id='product_name' href="#!">Name</a></th>
                    <th scope='col-2' className='header__item'><a onClick={sortTable} className='filter__link filter__link--number' id="product_stock" href='#!'>Stock</a></th>
                    <th scope='col-2' className='header__item'><a onClick={sortTable} className='filter__link filter__link--number' id="product_selling_price" href='#!'>Selling Price</a></th>
                  </tr>
                </thead>
                <tbody className='table-content'>
                  {products.map((product) => (
                    <tr key={product.product_id} className="table-row">                      
                      <td className='table-data'>{product.product_id}</td>
                      <td className='table-data text-capitalize'>{product.name}</td>
                      <td className='table-data text-capitalize'>{product.stock}</td>
                      <td className='table-data text-capitalize'>{product.selling_price}</td>
                    </tr>
                  ))}
                </tbody>
            </table>   
        </div>
    )
}

export default Products;