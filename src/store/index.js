import {createStore, applyMiddleware, combineReducers} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import campuses from './campuses'
import students from './students'
import singleCampus from './single_campus'
import {newStudentNameReducer as newStudentName, newStudentEmailReducer as newStudentEmail} from './new_student'
import {editStudentNameReducer as editStudentName, editStudentEmailReducer as editStudentEmail, editStudentCampusReducer as editStudentCampus} from './edit_student'

const reducer = combineReducers(
	{campuses, students, singleCampus, newStudentName, newStudentEmail, editStudentName, editStudentName}
	)

const store = createStore(
	reducer, applyMiddleware(loggerMiddleware, thunkMiddleware)
	)

export default store

export * from './campuses'
export * from './students'
export * from './single_campus'
export * from './new_student'
export * from './edit_student'