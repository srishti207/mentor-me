// store.js
import { createStore, combineReducers } from "redux";
import { conversationReducer } from "./reducers";

const rootReducer = combineReducers({
    conversation: conversationReducer,
});

const store = createStore(rootReducer);

export default store;
