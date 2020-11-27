import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from './index';

export default function configureStore(){
    const store = createStore(reducer, applyMiddleware(thunk));
    return store;
}