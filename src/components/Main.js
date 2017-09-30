import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Students from './Students';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import NewStudent from './NewStudent'
import EditStudent from './Student'
import store, {fetchCampuses, fetchStudents} from '../store';

export default class Main extends Component{
	componentDidMount(){
		const campusesThunk = fetchCampuses();
		store.dispatch(campusesThunk)
		const studentsThunk = fetchStudents();
		store.dispatch(studentsThunk)
	}

	render(){
		return(
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/students" component={Students} />
						<Route exact path="/campuses" component={Campuses} />
						<Route exact path = "/campuses/:campusId" component={SingleCampus} />
						<Route exact path = "/campuses/:campusId/addStudent" component={NewStudent} />
						<Route exact path = "/:studentId/editStudent" component={EditStudent} />
						
					</Switch>
					
				</div>
			</Router>
			)
		
	}
}