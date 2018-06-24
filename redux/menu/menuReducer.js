
import { MENU_FETCH } from './actions';



const initialState = [];

const menuReducer =  (state =  initialState, action) => {

    switch (action.type) {
        case MENU_FETCH:
        return  {
                    menu: action.menu,
                }
        default:
            return state;
    }
}

export default menuReducer;