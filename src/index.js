import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //Middleware to return async functions

import App from "./components/App";
import reducers from "./reducers";

// This is our store, with our reducers and middlewares
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

/* Rules about Reducers:
    1- Must return any value besides 'undefined'.
    2- Produces 'state' or data to be used inside of your app
    using only previous state and the action.
    3- Must not return reach 'out of itseld' to decide what value to return 
    (reducers are pure).
    4- Must not mutate its input 'state' argument, just because if you return the 
    same old state your application will not re-rendered.
*/
