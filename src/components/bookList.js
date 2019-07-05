import React from 'react';
import axios from 'axios';

const Book = ({book}) => (
    <div className="book-record" id={book._id}>
      <span> {book.book_title} </span>
      <span> {book.book_description} </span>
    </div>
);

class BookList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        books: [],
      }

      this.renderBooks = this.renderBooks.bind(this);
    }

    componentDidMount() {
      this.getBooks();
    }

    getBooks() {
      axios.get('http://localhost:4000/books/')
            .then(res => {
              this.setState({
                books: res.data
                })
              console.log(this.state);
            });
    }

    renderBooks() {
      return this.state.books.map(b => <Book book={b}/>)
    }

    render(){
      return (
        <div>
          {this.renderBooks()}
        </div>
      )
    }
}

export default BookList;
