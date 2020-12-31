import { ADD_USER, FAIL_USER, UPDATE_USER } from '../constants/user';

const initialState = {
    userInfo: {},
};

export const userRegisterReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:
            return { ...state, userInfo: action.payload }
        case UPDATE_USER:
            break;
        case FAIL_USER:
            break;
        default:
            return state;
    }
}