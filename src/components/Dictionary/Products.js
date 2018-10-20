import React, {Component} from 'react';
import SearchBar from '../SearchBar';
import ShowTable from '../ShowTable'
import Table from '../Table';
import Jumbotron from '../Jumbotron'
import Button from '../Button'
import './products.css';


class Products extends Component {
  constructor(props) {
    super(props);
    this.state= {
    };
    this.state.filterText = "";
    this.state.products = [
      {
        id: 1,
        name: 'Color',
        domain: 'Stonegrey',
        range: 'Dark Grey',
        add: true,
      }, {
        id: 2,
        name: 'Color',
        domain: 'Midnight Black',
        range: 'Black',
        add: true,
      }, {
        id: 3,
        name: 'Color',
        domain: 'Mystic Silver',
        range: 'Silver', 
        add: true,
      }, 
      {
        id: 4,
        name: 'Material',
        domain: 'Stainless Steel',
        range: 'Chromium', 
        add: true,  
      }, {
        id: 5,
        name: 'Material',
        domain: 'Wrought Iron',
        range: 'Iron',
        add: true,  
      }, 
    ];
  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

  handleRowDel(product) {
    const index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };
  handleAddRowToTable(product){
    product.add=true;

    // const add = this.state.product.add;
    // this.setState( { add: true } );
  }

  handleAddEvent(evt) {
    //this.setState({filterText:""});
    const id = (Math.floor(Math.random() * 999999)).toString(36);
    const product = {
      id: id,
      name: "",
      domain: "",
      range: "",
      add:false,
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
  };

  handleClickButton(name){
    // const products = this.state.products.filter(p=>p.name === name)
    this.setState({filterText:name})
  }
  render() {
    return (
      <div className="container">
        <Jumbotron />
        {/* <SearchBar 
          filterText={this.state.filterText} 
          onUserInput={this.handleUserInput.bind(this)}/> */}
        <Button 
          clickButton={this.handleClickButton.bind(this)} 
          products={this.state.products} 
          value = 'text'
        />
        <ShowTable 
          onProductTableUpdate={this.handleProductTable.bind(this)} 
          onRowAdd={this.handleClickButton.bind(this)}
          onRowDel={this.handleRowDel.bind(this)} 
          products={this.state.products} 
          filterText={this.state.filterText}
          clickAddButton={this.handleClickButton.bind(this)}/>
        <Table 
          onProductTableUpdate={this.handleProductTable.bind(this)} 
          onRowAdd={this.handleAddEvent.bind(this)} 
          onRowDel={this.handleRowDel.bind(this)} 
          addRowToTable={this.handleAddRowToTable.bind(this)}
          products={this.state.products} 
          filterText={this.state.filterText}
          />

      </div>
    );

  }
}
export default Products;