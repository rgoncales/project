import React, {Component} from 'react';

const Book = ({book}) => (
    <div className="book-record" id="tbd">
      <div> {book.title} </div>
      <span> {book.note} </span>
      <span> {book.date} </span>
    </div>
);

class Books extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        books: [],
        title: '',
        note: '',
        date: '',
      }

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
      const newBook = {
        title: this.state.title,
        note: this.state.note,
      }
      this.setState({
        books: [...this.state.books, newBook]
      });
      event.preventDefault();
    }

    render() {
      const renderBooks = this.state.books.map(b => <Book book={b}/>)
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title
              <input
                name='title'
                type='text'
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Note
              <input
                name='note'
                type='text'
                onChange={this.handleInputChange}
              />
            </label>
            <input type="submit" value="Add"/>
          </form>
          {renderBooks}
        </div>
      )
    }
}

export default Books;
