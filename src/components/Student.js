import React from 'react';
import { connect } from 'react-redux';
import store, { editStudentName, editStudentEmail, editStudentCampus, putStudent } from '../store'


function NewStudent (props){
	return(
		<div>edit student here
			<form id="edit-student-form" onSubmit={props.handleSubmit}>
				<div className="input-group">
					<input className="form-control" type="text" name="editedStudentName" value={props.editStudentName} placeholder="Student Name" onChange = {props.handleNameChange} />
					<input className="form-control" type="text" name="editedStudentEmail" value={props.editStudentEmail} placeholder="Student Email" onChange = {props.handleEmailChange} />
					<select className="form-control" name="editedStudentCampus" onChange={props.handleCampusChange}>
					{
						props.campuses.map(campus => {
							return (
								<option key = {campus.id}  value = {campus.id}>{campus.name}</option>
								)
						})
					}
					</select>
					<span className="input-group-btn">
						<button action="submit" className="btn" type="submit">Submit</button>
					</span>
				</div>
			</form>
			

		</div>
		)
}

function mapStateToProps(state){
	return {
		editedStudentName: state.editedStudentName,
		editedStudentEmail: state.editedStudentEmail,
		campuses: state.campuses
	}
}

function mapDispatchToProps(dispatch, ownProps){
	return{
		handleNameChange: function(e){
			dispatch(editStudentName(e.target.value))
		},
		handleEmailChange: function(e){
			dispatch(editStudentEmail(e.target.value))
		},
		handleCampusChange: function(e){
			dispatch(editStudentCampus(e.target.value))
		},
		handleSubmit: function(e){
			e.preventDefault()
			const studentId = ownProps.match.params.studentId
			dispatch(putStudent(
				{id: studentId, 
				name: e.target.editedStudentName.value, 
				email: e.target.editedStudentEmail.value, 
				campusId: e.target.editedStudentCampus.value}))
			dispatch(editStudentName(''))
			dispatch(editStudentEmail(''))
		}
	}
	
}

const container = connect(mapStateToProps, mapDispatchToProps)(NewStudent)
export default container;