import { createStore,applyMiddleware} from 'redux'
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const rootStore = createStore(rootReducer, applyMiddleware(thunk));

export const store = rootStore;


