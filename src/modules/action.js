import axios from 'axios';

const Types = {
  GET_BOOKS: "BOOKS::GET_ALL",
  CREATE_BOOK: "BOOKS::CREATE",
  DELETE_BOOKS: "BOOKS::DELETE_ALL"
};

const getBooks = () => dispatch => {
  axios.get('http://localhost:4000/books')
    .then((response) => {dispatch({type: Types.GET_BOOKS, payload: response.data.books})})
    .catch((response) => {return Promise.reject(response);});
};

const createBook = newBook => dispatch => {
  axios.post('http://localhost:4000/books/add', newBook)
  .then((response) => {dispatch({type: Types.CREATE_BOOK, payload: response.data.book})})
  .catch((response) => {return Promise.reject(response);});
};

const deleteBooks = () => dispatch => {
  axios.put('http://localhost:4000/books/delete')
    .then((response) => {dispatch({type: Types.DELETE_BOOKS, payload: response.data})})
    .catch((response) => {return Promise.reject(response);});
};

export default {
  getBooks,
  createBook,
  deleteBooks,
  Types
};
