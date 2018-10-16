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
      range: ""
    }
    this.state.products.push(product);
    console.log(this.state.product)
    this.setState(this.state.products);
  }

  handleProductTable(evt) {
    console.log("entered()");
    const item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    const products = this.state.products;
    const newProducts = products.map(function(product) {



      console.log("product id: " + product.id + ", product name: " + product.name + ", product domain: " + product.domain + ", product range: " + product.range);
      console.log("item.id: " + item.id + ", item.name: " + item.name + ",item.value: " + item.value);
      // item.name - name vagy domain vagy range
      console.log("test: " + product[item.name]);

      if (item.name==="name") {
        // we are currently editing the name field
        console.log("Ignore name column");
        if (product.id===item.id) {
          product[item.name]=item.value;
          return product;
        }
      } else if (item.name==="domain") {
        // we are currently editing the domain field
        if (product.domain===item.value && product.range!=="") {
          alert("The '" + item.value + "' domain is already exist.");
          item.value = "";
          return product;
        } else if (product.range===item.value && product.range!=="") {
          alert("The '" + item.value + "' domain is already defined as a range.");
          item.value = "";
          return product;
        } else if (product.id===item.id) {
          product.domain = item.value;
          return product;
        }
      } else if (item.name==="range") {
        // we are currently editing the range field
        if (product.domain===item.value && product.range!==""){
          alert("The '" + item.value + "' range is a domain.");
          item.value = "";
          return product;
        }else if (product.id===item.id) {
          product.range = item.value;
          return product;
        }
      }
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