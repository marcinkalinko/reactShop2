import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/index";

// const logger = store => next => action => {
//   console.log("dispatching", action);
//   let result = next(action);
//   console.log("next state", store.getState());
//   return result;
// };

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
