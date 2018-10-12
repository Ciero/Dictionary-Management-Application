import React, {Component} from 'react';
import './Dictionary/products.css'
// import Products from './Dictionary/Products'

class EditableCell extends Component {

//   handleChange(e){    
//     //alert("cell name: " + e.target.name + ", call value: " + e.target.value);
//     //let p = this.state.products;
//     //p[product] = e.target.value;        
//     //this.setState({products});
    
// }

    render() {
      return (
        <td id="editableCell">
          <input 
            type='text' 
            className="form-control" 
            name={this.props.cellData.type} 
            id={this.props.cellData.id} 
            value={this.props.cellData.value} 
            onChange={this.props.onProductTableUpdate}/>
        </td>
      );
    }
}  
export default EditableCell; 