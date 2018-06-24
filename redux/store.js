// redux store 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {getMenu} from './menu/actions'
import {getList} from './data/actions'

// import {persistStore, autoRehydrate} from 'redux-persist'

const logger = (store) => (next) => (action) => {
    if(typeof action !== "function"){
        console.log('dispatching:', action);
    }
    return next(action);
}

const store = createStore(reducers,
    compose(
    applyMiddleware(logger, thunk)
));

store.dispatch(getMenu())


export default store;
