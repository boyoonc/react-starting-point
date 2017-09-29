import React from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import store, { createStudentName, createStudentEmail } from '../store'


function NewStudent (props){
	console.log(props)
	return(
		<div>let's add a new student
			<form id="new-student-form">
				<div className="input-group">
					<input className="form-control" type="text" name="name-content" value={props.newStudentName} placeholder="Student Name" onChange = {props.handleNameChange} />
					<input className="form-control" type="text" name="email-content" value={props.newStudentEmail} placeholder="Student Email" onChange = {props.handleEmailChange} />
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

function mapDispatchToProps(dispatch){
	return{
		handleNameChange: function(e){
			console.log('are you in hre?')
			console.log(e.target.value)
			dispatch(createStudentName(e.target.value))
		},
		handleEmailChange: function(e){
			dispatch(createStudentEmail(e.target.value))
		},
		handleSubmit: function(e){
			e.preventDefault()
			dispatch(post)//need to continue here
		}
	}
	
}

const container = connect(mapStateToProps, mapDispatchToProps)(NewStudent)
export default container;