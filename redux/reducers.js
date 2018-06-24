import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import menuReducer from './menu/menuReducer';
import dataReducer from './data/dataReducer';



export default combineReducers({
    authReducer,
    menuReducer,
    dataReducer
})