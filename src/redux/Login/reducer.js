import {SET_LOGIN_DATA} from "./types"

const initialState = {
    userDetails:{}
  };

const loginReducer=(state = initialState, action) => {
    switch(action.type){
    case SET_LOGIN_DATA:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
        return state

    }
}

export default loginReducer;