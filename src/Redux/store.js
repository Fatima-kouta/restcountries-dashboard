import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import dataReducer from './reducers/reducers';

const store = configureStore({
  reducer: {
    countries: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;