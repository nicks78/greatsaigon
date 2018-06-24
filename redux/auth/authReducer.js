//  src/auth/authReducer

import { LOGIN_LOAD } from './actions';



const initialState = [];

const authReducer =  (state =  initialState, action) => {

    switch (action.type) {
        case LOGIN_LOAD:
        return  Object.assign({}, state, {
                    isFetching: true,
                })
        default:
            return state;
    }
}

export default authReducer;