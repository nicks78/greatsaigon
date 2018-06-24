// src/containers/login/actions.jsx

export const LOGIN_LOAD = 'LOGIN_LOAD';



export function getAuth(creds){

}

export function setLoad(){
    return {
        type: LOGIN_LOAD,
        isFetching: true,
    }
}

