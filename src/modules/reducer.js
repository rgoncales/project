import ACTIONS from "./action";

const defaultState = {
  books: []
};

const todoReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.Types.GET_BOOKS: {
      return Object.assign({}, state, {
        books: state.books.concat(payload)
        });
      }
    case ACTIONS.Types.CREATE_BOOK: {
      return {
        books: [...state.books, payload]
      }
    }
    case ACTIONS.Types.DELETE_BOOKS: {
      return defaultState;
    }
    default:
      return state;
  }
};

export default todoReducer;
