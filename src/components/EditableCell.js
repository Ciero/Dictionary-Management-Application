import React, {Component} from 'react';
import './Dictionary/products.css'

class EditableCell extends Component {
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