/**
 * Created by Increment on 27.11.2016.
 */

import {USER_REGISTER,USER_LOGIN,USER_LOGOUT,USER_REGREGISTER_ERR,USER_LOGIN_ERR} from '../constants/userConst'

const initialState = {};

export default function (state = initialState, action) {
	switch(action.type){
		case USER_REGISTER:
			return {...state, user: action.payload};
		case USER_REGREGISTER_ERR:
			return {...state, err: action.payload};
		case USER_LOGIN:
			return {...state, token: action.payload.token, user: action.payload.user};
		case USER_LOGIN_ERR:
			return {...state, err: action.payload};
		case USER_LOGOUT:
			return {...state, token: null, user: null};
		default:
			return state;
	}
}