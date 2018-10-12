import React, {Component} from 'react';
import SearchBar from '../SearchBar';
import Table from '../Table';
import Jumbotron from '../Jumbotron'
import './products.css';


class Products extends Component {
  constructor(props) {
    super(props);
    //  this.state.dictionary = [];
    this.state= {
    };
    this.state.filterText = "";
    this.state.products = [
      {
        id: 1,
        name: 'color',
        domain: 'Stonegrey',
        range: 'Dark Grey',
        error: null,
        
      }, {
        id: 2,
        name: 'color',
        domain: 'Midnight Black',
        range: 'Black',
        error: null,
        
      }, {
        id: 3,
        name: 'color',
        domain: 'Mystic Silver',
        range: 'Silver',
        error: null,
        
      }, 
    ];
  }
  renderError() {
    if (!this.state.products.error) {
      return null;
    }
    return <div>{this.state.products.error}</div>;
  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

  handleRowDel(product) {
    const index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    const id = (Math.floor(Math.random() * 999999)).toString(36);
    const product = {
      id: id,
      name: "",
      domain: "",
      range: "",
      error:""
    }
    this.state.products.push(product);
    console.log(this.state.product)
    this.setState(this.state.products);
  }

  handleProductTable(evt) {
    const item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    const products = this.state.products;
    const newProducts = products.map(function(product) {
      for (const key in product) {
        if (key === item.name && product.id === item.id) {
          product.id = item.id;
          product[key] = item.value;
        } 
          else if(item.value===products[0].domain || item.value===products[1].domain || item.value===products[2].domain){
          return alert('The '+ item.value + ' domain is already exist.');
        } else if(item.value===products[0].range || item.value===products[1].range || item.value===products[2].range){
          return alert('The '+ item.value + ' is already a Range, you dont have to transelate it');
        }   
      }return product;
    });
    this.setState(newProducts);
    console.log(this.state.products);
  };

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <SearchBar 
          filterText={this.state.filterText} 
          onUserInput={this.handleUserInput.bind(this)}/>
        <Table 
          onProductTableUpdate={this.handleProductTable.bind(this)} 
          onRowAdd={this.handleAddEvent.bind(this)} 
          onRowDel={this.handleRowDel.bind(this)} 
          products={this.state.products} 
          filterText={this.state.filterText}/>
        <div className="errorMsg">
          {this.renderError()}
        </div>
      </div>
    );

  }
}
export default Products;