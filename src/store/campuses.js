const GET_CAMPUSES = 'GET_CAMPUSES'

export function getCampuses(campuses){
	const action = {type: GET_CAMPUSES, campuses}
}

function campusesReducer(state = [], action){
	switch(action.type){
		case GET_CAMPUSES:
			return action.campuses
		default:
			return state;}
}

export default campusesReducer