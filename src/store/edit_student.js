
const EDIT_STUDENT_NAME = 'EDIT_STUDENT_NAME'
const EDIT_STUDENT_EMAIL = 'EDIT_STUDENT_EMAIL'
const EDIT_STUDENT_CAMPUS = 'EDIT_STUDENT_CAMPUS'

export function editStudentName(name){
	const action = {type: EDIT_STUDENT_NAME, name}
	return action
}

export function editStudentEmail(email){
	const action = {type: EDIT_STUDENT_EMAIL, email}
	return action
}

export function editStudentCampus(campusId){
	const action = {type: EDIT_STUDENT_CAMPUS, campusId}
	return action
}

export function editStudentNameReducer(state='', action){
	switch(action.type){
		case EDIT_STUDENT_NAME:
			return action.name
		default:
			return state
	}
}

export function editStudentEmailReducer(state='', action){
	switch(action.type){
		case EDIT_STUDENT_EMAIL:
			return action.email
		default:
			return state
	}
}

export function editStudentCampusReducer(state='', action){
	switch(action.type){
		case EDIT_STUDENT_CAMPUS:
			return action.campusId
		default:
			return state
	}
}


