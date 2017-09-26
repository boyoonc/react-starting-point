import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';


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

function studentsReducer(state = [], action){
	switch(action.type){
		case GET_STUDENTS:
			return state = action.students
		default:
			return state
	}
}

export default studentsReducer