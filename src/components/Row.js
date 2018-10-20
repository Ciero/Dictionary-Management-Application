import React, {Component} from 'react';
import EditableCell from './EditableCell';
import Arrow from './Arrow';
import './Dictionary/products.css'

class Row extends Component {
  
    onDelEvent() {
      this.props.onDelEvent(this.props.product);
    }
    addRowToTable() {
      this.props.addRowToTable(this.props.product);
    }
    render() {
      return (
        <tr className="eachRow">
          <EditableCell 
            onProductTableUpdate={this.props.onProductTableUpdate} 
            cellData={{
              type: "name",
              value: this.props.product.name,
              id: this.props.product.id,
          }}/>
          <EditableCell 
            onProductTableUpdate={this.props.onProductTableUpdate} 
            cellData={{
              type: "domain",
              value: this.props.product.domain,
              id: this.props.product.id,
          }}/>
          <Arrow />
          <EditableCell 
            onProductTableUpdate={this.props.onProductTableUpdate} 
            cellData={{
              type: "range",
              value: this.props.product.range,
              id: this.props.product.id,
          }}/>
          <td className="addToTable">
            <input 
              type="button" 
              onClick={this.addRowToTable.bind(this)} 
              value="Save" 
              className="ok-btn"/>
          </td>
          <td className="del">
            <input 
              type="button" 
              onClick={this.onDelEvent.bind(this)} 
              value="X" 
              className="del-btn"/>
          </td>
        </tr>
      );
    }
    
  }
  export default Row;