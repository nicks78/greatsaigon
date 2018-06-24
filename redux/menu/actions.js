// redux/menu/actions
import {API_ENDPOINT} from '../../api/constant'
import axios from 'axios'


export const MENU_FETCH = 'MENU_FETCH';

export function getMenu(){
    
    return dispatch => {

        // Set auth token 
        axios.get(`${API_ENDPOINT}directories`, {
        })
        .then(function (response) {  
            return response.data
        }) 
        .then( menu => {
            dispatch(setMenu(menu))
        })
    }
}


export function setMenu(menu){
    return {
        type: MENU_FETCH,
        menu
    }
}

