import { IS_VOTED, IS_VALID_USER, LENGTH } from "./constant";

const initialState = {
  isVoted: false,
  isUserValid: false,
  length: 0,
};

const data_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_VOTED:
      return {
        ...state,
        isVoted: true,
      };
    case LENGTH:
      return {
        ...state,
        length: action.data,
      };

    default:
      return { ...state };
  }
};

export default data_Reducer;
