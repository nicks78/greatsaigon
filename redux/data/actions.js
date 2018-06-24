// redux/menu/actions
import {API_ENDPOINT} from '../../api/constant'
import axios from 'axios'


export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_OBJECT = 'FETCH_OBJECT';
export const RESET_DATA = 'RESET_DATA';
export const LOADING = 'LOADING';

export function getList(api){
    
    return dispatch => {

        // loading 
        dispatch(setLoading())

        // Set auth token 
        axios.get(`${API_ENDPOINT}${api}`, {

        })
        .then(function (response) {  
            return response.data
        }) 
        .then( list => {
            dispatch(setList(list))
        })
    }
}

export function getSingleObject(api){
    
    return dispatch => {

        // loading 
        dispatch(setLoading())

        // Set auth token 
        axios.get(`${API_ENDPOINT}${api}`, {

        })
        .then(function (response) {  
            return response.data
        }) 
        .then( res => {
            dispatch(setSingleObject(res))
        })
    }
}


export function setLoading(){
    return {
        type: LOADING,
        isFetching: true
    }
}

export function setList(list){
    return {
        type: FETCH_LIST,
        list
    }
}


export function setSingleObject(payload){
    return {
        type: FETCH_OBJECT,
        payload
    }
}


export function resetData(){
    return {
        type: RESET_DATA,
        list: []
    }
}
