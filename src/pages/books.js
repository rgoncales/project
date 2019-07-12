import React from 'react';
import axios from 'axios';
import BookList from '../components/bookList';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  createBook: item => dispatch(ACTIONS.createBook(item)),
  deleteAllBooks: () => dispatch(ACTIONS.deleteBooks()),
});

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
      this.props.createBook(newBook);
      this.setState({
        title: '',
        description: ''
      });
    }

    deleteRecords() {
      this.props.deleteAllBooks();
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

export default connect(
  null,
  mapDispatchToProps,
)(Books);
