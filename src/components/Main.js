import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Students from './Students'
import Campuses from './Campuses'
import store from '../store'

export default class Main extends Component{
	render(){
		return(
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/students" component={Students} />
						<Route exact path="/campuses" componenta={Campuses} />
					</Switch>
					<div>Hi! you're on the landing page. click on students or campuses on the navbar to explore!</div>
				</div>
			</Router>
			)
		
	}
}