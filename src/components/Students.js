import React from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

function Students (props){
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
					
					props.students.map(student => { return (
						<Row key = {'allstudents' + student.id}>
							<Col md={1}/>
							<Col md={3}>
								<p> {student.name} </p>
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
		students: state.students,
		campuses: state.campuses
	}
}

const container = connect(mapStateToProps)(Students)
export default container;