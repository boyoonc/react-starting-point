import React from 'react';
import { connect } from 'react-redux'
import Students from './Students';

function SingleCampus(props){ //this name doesn't matter??
	const {campusId} = props

	

	return(
		<div>
			<h1> CAMPUS NAME HERE </h1>
			<div> {console.log(props.campuses)} </div>
			<Students campusId = {props.campusId} />
		</div>
		)
}

function mapStateToProps(state, ownProps){
	return {
		campusId: ownProps.match.params.campusId,
		students: state.students,
		campuses: state.campuses
	}
}

const container = connect(mapStateToProps)(SingleCampus)
export default container;
