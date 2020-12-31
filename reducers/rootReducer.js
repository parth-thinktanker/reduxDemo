import { userRegisterReducer  } from '../reducers/userReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    User: userRegisterReducer
})

export default rootReducer;