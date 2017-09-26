import React from 'react';
import Students from './Students';

function StatefulStudents(){
	return(
		<Students campusId = {campusId} />
		)
}

function mapStateToProps(state, ownProps){
	return {
		campusId: ownProps.match.params.campusId
	}
}

const container = connect(mapStateToProps)(Students)
export default container;
