import React, {Component} from 'react';
import './Dictionary/products.css'

class SearchBar extends Component {
    handleChange() {
      this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render() {
      return (
        <div className="searchBar input-group mb-3">
          <h3 className="searchText">Search dictionary: </h3>
          <input type="text" className="form-control" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
        </div>
  
      );
    }
  }
  export default SearchBar; 