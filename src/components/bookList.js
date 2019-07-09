import React from 'react';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const Book = ({book}) => (
    <div className="book-record">
      <span> {book.book_title} </span>
      <span> {book.book_description} </span>
    </div>
);

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(ACTIONS.getBooks()),
});

class BookList extends React.Component {
    constructor(props) {
      super(props);
      this.renderBooks = this.renderBooks.bind(this);
    }

    componentDidMount() {
      this.props.getBooks();
    }

    renderBooks() {
      return this.props.books.map(b => <Book book={b} key={b._id}/>)
    }

    render(){
      return (
        <div>
          {this.renderBooks()}
        </div>
      )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
