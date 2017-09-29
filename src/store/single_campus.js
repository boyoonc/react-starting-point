import axios from 'axios';

const GET_CAMPUS = 'GET_CAMPUS'

export function getCampus(campus){
	const action = {type: GET_CAMPUS, campus}//not 100% clear on the campus here
	return action
}

export function fetchCampus(campusId){
	return function thunk(dispatch){
		return axios.get(`/api/campuses/${campusId}`)
			.then(res=>res.data)
			.then(campus => {
				const action = getCampus(campus)
				dispatch(action)
			})
	}
}

function singleCampusReducer(state={}, action){
	switch(action.type){
		case GET_CAMPUS:
			return action.campus
		default:
			return state
	}
}

export default singleCampusReducer