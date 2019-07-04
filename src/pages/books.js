import React, {Component} from 'react';
import axios from 'axios';

const Book = ({book}) => (
    <div className="book-record" id="tbd">
      <span> {book.book_title} </span>
      <span> {book.book_description} </span>
    </div>
);

class Books extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        books: [],
        title: '',
        description: '',
        date: '',
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
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
            });
    }

    handleInputChange(e) {
      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    onSubmit(e) {
      e.preventDefault();
      const newBook = {
        book_title: this.state.title,
        book_description: this.state.description,
      }
      axios.post('http://localhost:4000/books/add', newBook)
            .then(res => console.log(res.data))
            .then(() => this.getBooks());
      this.setState({
        title: '',
        description: ''
      });
    }

    renderBooks() {
      return this.state.books.map(b => <Book book={b}/>)
    }
    render() {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <label>
              Title
              <input
                name='title'
                type='text'
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Note
              <input
                name='description'
                type='text'
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </label>
            <input type="submit" value="Add"/>
          </form>
          {this.renderBooks()}
        </div>
      )
    }
}

export default Books;
