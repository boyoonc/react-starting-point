import axios from 'axios';

const GET_STUDENT = 'GET_STUDENT'
const GET_STUDENTS = 'GET_STUDENTS';

export function getStudent(student){
	const action = {type: GET_STUDENT, student}
	return action
}

export function getStudents(students){
	const action = {type: GET_STUDENTS, students}
	return action
}

export function fetchStudents(){
	return function thunk (dispatch){
		return axios.get('/api/students')
		.then(res=> {
			return res.data})
		.then(students => {
			const action = getStudents(students)
			dispatch(action)
		})	
	}
	
}

export function postStudent(student){
	return function thunk (dispatch) {
		return axios.post('/api/students', student)
			.then(res => res.data)
			.then(student => {
				const action = getStudent(student)
				dispatch(action)
			})
	}
}


function studentsReducer(state = [], action){
	switch(action.type){
		case GET_STUDENTS:
			return action.students
		case GET_STUDENT:
			return [...state, action.student]
		default:
			return state
	}
}

export default studentsReducer