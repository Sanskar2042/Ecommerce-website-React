import { SET_USER } from "../actions";

const user_reducer = (state, action) => {
  if (action.type === SET_USER) {
    return { ...state, user: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
