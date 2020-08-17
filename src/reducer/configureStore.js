import { createStore } from "redux";
//import reducer from '.';

export default function  configureStore(initialStore){
    const reducer= (state, action = {})=>{
        switch (action.type) {
          default:
            return { ...state };
        }
    }
    const store=createStore(reducer);
    return store;
}