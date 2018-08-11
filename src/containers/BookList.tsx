import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
  books: any
}
class BookList extends React.PureComponent <Props>{
  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
  renderList () {
    return this.props.books.map((book)=> {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
        )
    })
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  // this object below will be set as 'this.props.{whatever_key}` for BookList 
  return {
    books:  state.books
  };
}

// this function actually returns a container
export default connect(mapStateToProps)(BookList)