import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_BOOK: {
      console.log(action);
      console.log(state);
      return {
        items: [...state.items, action.payload.book]
      }
    }
    default:
      return state;
  }
};

export default todoReducer;
