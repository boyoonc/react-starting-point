import axios from 'axios';

const GET_STUDENT = 'GET_STUDENT'
const GET_STUDENTS = 'GET_STUDENTS';
const STUDENTS_AFTER_DELETE = 'STUDENTS_AFTER_DELETE'

export function getStudent(student){
	const action = {type: GET_STUDENT, student}
	return action
}

export function getStudents(students){
	const action = {type: GET_STUDENTS, students}
	return action
}

export function studentsAfterDelete(studentId){
	const action = {type: STUDENTS_AFTER_DELETE, studentId}
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
				const action = getStudent(student[0])
				dispatch(action)
			})
	}
}

export function putStudent(student){
	return function thunk (dispatch){
		return axios.put('/api/students', student)
			.then(res => res.data)
			.then(students=> {
				const action = getStudents(students)
				dispatch(action)
			})
	}
}

export function deleteStudent(studentId){
	return function thunk(dispatch){
		return axios.delete(`/api/students/${studentId}`)
			.then(()=> { 
				const action = studentsAfterDelete(studentId)
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
		case STUDENTS_AFTER_DELETE:
			return state.filter(student => student.id !== action.studentId)
		default:
			return state
	}
}

export default studentsReducer