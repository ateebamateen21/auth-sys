import { createStore, applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/index.ts";


//for now (any) is used as the type for rootReducer. Change later.
const store = createStore(rootReducer as any, applyMiddleware(thunk));

//initial state of the application where authReducer holds the User that is initially null.
console.log("initial state", store.getState());

//subscribe
store.subscribe(() => {
  console.log("updated state", store.getState());
});

//this is consoling the state everytime the state is updated (action dispatched).

export default store;
