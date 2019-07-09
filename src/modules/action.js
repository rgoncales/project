import axios from 'axios';

// types of action
const Types = {
  CREATE_BOOK: "CREATE_BOOK",
  DELETE_BOOK: "DELETE_BOOKS"
};
// actions
const createBook = newBook => {
  return(dispatch) => {
    axios.post('http://localhost:4000/books/add', newBook)
      .then((response) => {dispatch({type: Types.CREATE_BOOK, payload: response.data})})
      .catch((response) => {return Promise.reject(response);});
  };
};

const deleteBook = id => ({
  type: Types.DELETE_BOOKS,
  payload: id
});

export default {
  createBook,
  deleteBook,
  Types
};
