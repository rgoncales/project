import React, {Component} from 'react';
import axios from 'axios';
import BookList from '../components/bookList';

class Books extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: '',
        date: '',
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
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
            .then(res => console.log(res.data));
      this.setState({
        title: '',
        description: ''
      });
    }

    deleteRecords() {
      axios.put('http://localhost:4000/books/delete');
    }

    render() {
      return (
        <div>
          <div>
            <button onClick={() => this.deleteRecords()}>
              Delete ALL
            </button>
          </div>
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
          <BookList/>
        </div>
      )
    }
}

export default Books;
