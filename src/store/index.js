import {createStore, applyMiddleware, combineReducers} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import campuses from './campuses'

const reducer = combineReducers(
	{campuses}	
	)

const store = createStore(
	reducer, applyMiddleware(loggerMiddleware, thunkMiddleware)
	)

export default store