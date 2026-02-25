import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { application, messages, contacts } from "./ducks";

const rootReducer = combineReducers({
  application, messages, contacts
});

export const store = createStore(rootReducer, applyMiddleware(thunk));