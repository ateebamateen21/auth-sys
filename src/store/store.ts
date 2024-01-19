import { applyMiddleware, Middleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.ts";


const store = createStore(rootReducer);

//initial state of the application where authReducer holds the User that is initially null.
console.log("initial state", store.getState())

//subscribe 
store.subscribe(()=>{
    console.log("updated state", store.getState())
})



export default store;