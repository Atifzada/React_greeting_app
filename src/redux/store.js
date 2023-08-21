// app/javascript/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  greeting: '',
};

const SET_GREETING = 'SET_GREETING';

export const setGreeting = (greeting) => ({
  type: SET_GREETING,
  greeting,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETING:
      return { ...state, greeting: action.greeting };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
