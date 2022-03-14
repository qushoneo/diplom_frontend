import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from '../account/authSlice';
import toolkitReducer from './toolkitReducer';

const rootReducer = combineReducers({
    auth: authSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;