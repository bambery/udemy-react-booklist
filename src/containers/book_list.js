import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  render() {
    return ( 
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.books.map( (book) => {
      return(
        <li 
          key={book.title} 
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

}

function mapStateToProps(state){
  // whatever is returned from here will show up as props inside of BookList
  return {
    books: state.books
  };
}

// values returned from this function will be available as props on this container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result will be passed to containers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from a component to a container, and inform it about the new dispatch method, selectBook, making it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
