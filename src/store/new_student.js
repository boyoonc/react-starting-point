
const CREATE_STUDENT_NAME = 'CREATE_STUDENT_NAME'
const CREATE_STUDENT_EMAIL = 'CREATE_STUDENT_EMAIL'

export function createStudentName(name){
	const action = {type: CREATE_STUDENT_NAME, name}
	return action
}

export function createStudentEmail(email){
	const action = {type: CREATE_STUDENT_EMAIL, email}
	return action
}

export function newStudentNameReducer(state='', action){
	switch(action.type){
		case CREATE_STUDENT_NAME:
			return action.name
		default:
			return state
	}
}

export function newStudentEmailReducer(state='', action){
	switch(action.type){
		case CREATE_STUDENT_EMAIL:
			return action.email
		default:
			return state
	}
}


