import React from 'react';
import Products from './products';
import Orders from './orders';
import Customers from './customers';
import SideBar from './sidebar';
import $ from 'jquery';

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: props.users,
      productsList: props.products,
      ordersList: props.orders,
      menu: false,
      dest: 'customers',
      dests: ['customers','products','orders']
    }    
    this.handleMenu = this.handleMenu.bind(this);
    this.handleDest = this.handleDest.bind(this);
    this.sortTable = this.sortTable.bind(this);
    this.GetContent = this.GetContent.bind(this);
  }  

  handleMenu() {
    if (this.state.menu === false) {
      this.setState({ menu: true })
    } else {
      this.setState({ menu: false })
    }
  }

  handleDest(e) {
    let dest = e.target.getAttribute('dest');
    this.setState({ dest: dest });    
    this.handleMenu();
  }

  sortTable(e) {
    var orderClass = '';
    e.preventDefault();
    $('.filter__link.filter__link--active').not(e.target).removeClass('filter__link--active');
    $(e.target).toggleClass('filter__link--active');
    $('.filter__link').removeClass('asc desc');

    if(orderClass === 'desc' || orderClass === '') {
            $(e.target).addClass('asc');
            orderClass = 'asc';
    } else {
        $(e.target).addClass('desc');
        orderClass = 'desc';
    }

    var parent = $(e.target).closest('.header__item');
        var index = $(".header__item").index(parent);
    var $table = $('.table-content');
    var rows = $table.find('.table-row').get();
    var isSelected = $(e.target).hasClass('filter__link--active');
    var isNumber = $(e.target).hasClass('filter__link--number');
        
    rows.sort(function(a, b){

        var x = $(a).find('.table-data').eq(index).text();
            var y = $(b).find('.table-data').eq(index).text();
            
        if(isNumber === true) {
                    
            if(isSelected) {
                return x - y;
            } else {
                return y - x;
            }

        } else {
        
            if(isSelected) {		
                if(x < y) return -1;
                if(x > y) return 1;
                return 0;
            } else {
                if(x > y) return -1;
                if(x < y) return 1;
                return 0;
            }
        }
        });

    $.each(rows, function(index,row) {
        $table.append(row);
    });

    return false;
  }
    
  GetContent() {
    if (this.state.dest === 'customers') return <Customers customers={this.state.usersList} sortTable={this.sortTable} actionDest={this.handleDest} dest={this.state.dest}></Customers>
    if (this.state.dest === 'products') return <Products products={this.state.productsList} sortTable={this.sortTable} actionDest={this.handleDest} dest={this.state.dest}></Products>
    if (this.state.dest === 'orders') return <Orders orders={this.state.ordersList} products={this.state.productsList} customers={this.state.usersList}  sortTable={this.sortTable} actionDest={this.handleDest} dest={this.state.dest}></Orders>
  }

  render() {
    return <div className="container-fluid app-contn position-fixed">
      <div className="row">  
        <div className="container-fluid header shadow-sm header d-flex d-md-none justify-content-end py-1">
          <button onClick={this.handleMenu} className="menu-btn">
            <i className={this.state.menu?"bi bi-x-lg":"bi bi-list"}></i>  
          </button>                  
          <SideBar action={this.handleMenu} menu={this.state.menu} destAction={this.handleDest} dest={this.state.dest} dests={this.state.dests} ></SideBar>
        </div>                
        <div className="lg-menu col-md-3 p-5 d-md-block border d-none">
          <ul className='p-0'>
            {
              this.state.dests.map(dest => {
                return <li key={dest}>
                  <button title={dest} className={'text-capitalize ' + (dest===this.state.dest?'active':'')} dest={dest} onClick={this.handleDest}>{dest}</button>
                </li>
              })
            }
          </ul>
        </div>
        <div className="col-12 col-md-9 main mt-md-0 pt-md-3 pt-2 mt-2">
            <h2 className='text-capitalize pb-1'>{this.state.dest}</h2>
            <div className="container-fluid dest p-0">
              {this.GetContent()}
            </div>
        </div>
      </div>
    </div>
  }
}

export default Action;