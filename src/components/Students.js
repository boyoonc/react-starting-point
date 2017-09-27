import React from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

function Students (props){
	console.log(props)
	const filtered_list = props.students.filter(student =>{ 
						console.log(student.campus.id)
						console.log(props.campusId)
						console.log(parseInt(student.campus.id) ===  parseInt(props.campusId))
						return (
						parseInt(student.campus.id) === parseInt(props.campusId)
						)
					})
	return(
		<div>you're among peers!
			<Grid>
				<Row>
					<Col md={1}/>
					<Col md={3}>
						<p> Student Name </p>
					</Col>
					<Col md={3}>
						<p> Email </p>
					</Col>
					<Col md={3}>
						<p> Campus </p>
					</Col>
				</Row>
				{
					
					filtered_list.map(student => { return (
						<Row key = {student.id}>
							<Col md={1}/>
							<Col md={3}>
								<a href='#'> {student.name} </a>
							</Col>
							<Col md={3}>
								<p> {student.email} </p>
							</Col>
							<Col md={3}>
								<p> {student.campus.name}</p>
							</Col>
						</Row>

						)})
				}
			</Grid>
		</div>
		)
}

function mapStateToProps(state){
	return {
		students: state.students
	}
}

const container = connect(mapStateToProps)(Students)
export default container;