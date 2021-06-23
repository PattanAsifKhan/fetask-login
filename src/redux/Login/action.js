import {SET_LOGIN_DATA} from "./types"

export const setLoginData = (data) => {
    return {
      type: SET_LOGIN_DATA,
      payload: data,
    };
  };