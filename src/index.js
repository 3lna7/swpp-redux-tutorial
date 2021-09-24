import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './store/reducers/todo';

//this was an empty reducer which we donnot need anymore
//const reducer = (state = {}, action) => {
  //  return state;
//}

//defining combinereducer
//we have only one single reducer but we can merge a bunch of other reducers using thiis combinereducer
const rootReducer = combineReducers({
    td: todoReducer,
});

const store = createStore(rootReducer);

//We should rap our App with provider with the store we just created
//we can use this store for its rap compomnent and it child componenets

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
