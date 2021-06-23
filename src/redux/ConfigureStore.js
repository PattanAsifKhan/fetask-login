import { createStore, combineReducers, compose } from "redux";
import loginReducer from "./Login/reducer";

const reducer = combineReducers({
  Login: loginReducer,
});
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, enhancers);

export default store;