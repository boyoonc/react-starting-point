import React from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import store, { createStudentName, createStudentEmail, postStudent } from '../store'


function NewStudent (props){
	return(
		<div>let's add a new student
			<form id="new-student-form" onSubmit={props.handleSubmit}>
				<div className="input-group">
					<input className="form-control" type="text" name="newStudentName" value={props.newStudentName} placeholder="Student Name" onChange = {props.handleNameChange} />
					<input className="form-control" type="text" name="newStudentEmail" value={props.newStudentEmail} placeholder="Student Email" onChange = {props.handleEmailChange} />
					<span className="input-group-btn">
						<button className="btn" type="submit">Submit</button>
					</span>
				</div>
			</form>
			

		</div>
		)
}

function mapStateToProps(state){
	return {
		newStudentName: state.newStudentName,
		newStudentEmail: state.newStudentEmail
	}
}

function mapDispatchToProps(dispatch, ownProps){
	return{
		handleNameChange: function(e){
			dispatch(createStudentName(e.target.value))
		},
		handleEmailChange: function(e){
			dispatch(createStudentEmail(e.target.value))
		},
		handleSubmit: function(e){
			e.preventDefault()
			const campusId = ownProps.match.params.campusId
			dispatch(postStudent({name: e.target.newStudentName.value, email: e.target.newStudentEmail.value, campusId}))
			dispatch(createStudentName(''))
			dispatch(createStudentEmail(''))
		}
	}
	
}

const container = connect(mapStateToProps, mapDispatchToProps)(NewStudent)
export default container;