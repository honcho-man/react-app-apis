import React from 'react';

function Customers({customers, sortTable, actionDest, dest}) {
    return (
        <div className={ ' ' + (dest==='customers'?'d-block':'d-none')}>
            <table className="table table-dark table-hover">
                <thead className='bg-dark table-header'>
                  <tr>
                    <th scope='col-sm-2' className='header__item'><a onClick={sortTable} className='filter__link filter__link--number' id="customer_id" href='#!'>ID</a></th>
                    <th scope="col-sm-10" className='header__item'><a onClick={sortTable} className='filter__link' id='customer_name' href="#!">Name</a></th>
                  </tr>
                </thead>
                <tbody className='table-content'>
                  {customers.map((customer) => (
                    <tr key={customer.user_id} className="table-row">                      
                      <td className='table-data'>{customer.user_id}</td>
                      <td className='table-data text-capitalize'>{customer.name}</td>
                    </tr>
                  ))}
                </tbody>
            </table>   
        </div>
    )
}

export default Customers;