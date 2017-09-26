import axios from 'axios';


const GET_CAMPUSES = 'GET_CAMPUSES';

export function getCampuses(campuses){
	console.log('got into the action creator')
	const action = {type: GET_CAMPUSES, campuses}
	return action
}

export function fetchCampuses(){

	return function thunk (dispatch){
		console.log('top of thunkkkkk')
		return axios.get('/api/campuses')
			.then(res=>res.data)
			.then(campuses => {
				console.log('middle of thunk', campuses)
				const action = getCampuses(campuses)
				dispatch(action)
			})
	}
}

function campusesReducer(state = [''], action){
	console.log('got into the mini reducer')
	switch(action.type){
		case GET_CAMPUSES:
			console.log('right action type?')
			return action.campuses
		default:
			return state;}
}

export default campusesReducer