import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_ERROR,
} from "./constants";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      console.log(action);
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialRobotState = {
  isPending: false,
  robots: [],
  error: "",
};

export const requestRobots = (state = initialRobotState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOT_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOT_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    case REQUEST_ROBOT_ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state; 
  }
};
