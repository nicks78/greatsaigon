
import { FETCH_LIST } from './actions';
import { FETCH_OBJECT } from './actions';
import { RESET_DATA } from './actions';
import { LOADING } from './actions';



const initialState = [];

const dataReducer =  (state =  initialState, action) => {

    switch (action.type) {
        case LOADING:
        return  {
                    isFetching: true,
                    list: [],
                }
        case FETCH_LIST:
        return  {
                    isFetching: false,
                    list: action.list,
                }
        case FETCH_OBJECT:
        return  {
                    isFetching: false,
                    payload: action.payload,
                }
        case RESET_DATA:
        return  initialState
        default:
            return state;
    }
}

export default dataReducer;