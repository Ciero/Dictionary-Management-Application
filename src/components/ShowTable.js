import React, {Component} from 'react';
import Row from './Row';
import './Dictionary/products.css';


class ShowTable extends Component {
  render() {
    const onProductTableUpdate = this.props.onProductTableUpdate;
    const rowDel = this.props.onRowDel;
    const filterText = this.props.filterText;
    const product = this.props.products.map(function(product) {
      if (product.name.indexOf(filterText) === -1) {
        return null;
      }
      return (<Row 
        onProductTableUpdate={onProductTableUpdate} 
        product={product} 
        onDelEvent={rowDel.bind(this)} 
        key={product.id}/>
        
        )
    });
    return (
      <div>
      <div className="showdictionary">
        <table className="table">
          <thead id="theadText">
            <tr>
              <th>Dictionary Name</th>
              <th>Domain</th>
              <th>   </th>
              <th>Range</th>
            </tr>
          </thead>

          <tbody>
            {product}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
  
}
export default ShowTable ;