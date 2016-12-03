/**
 * Created by Increment on 27.11.2016.
 */

import {USER_REGISTER,USER_LOGIN,USER_LOGOUT,USER_REGREGISTER_ERR,USER_LOGIN_ERR} from '../constants/userConst'
import {browserHistory} from 'react-router'
import config from '../../config'

//что бы направить поьзователя, используйте browserHistory.push({ваш путь (пример '/')});

export function registrationUser(formBody){
	return (dispatch) => {
		fetch(`${config.server}/register`, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formBody)
		})
			.then((res)=>res.json())
			.then((data)=>{
				if(data.err){
					dispatch({
						type: USER_REGREGISTER_ERR,
						payload: data.err
					})
				}else{
					dispatch({
						type: USER_REGISTER,
						payload: data
					});
				}
			})
			.catch((err)=>{
				dispatch({
					type: USER_REGREGISTER_ERR,
					payload: err
				})
			});
	}
}