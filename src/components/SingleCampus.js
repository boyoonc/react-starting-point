import React, {Component} from 'react';
import {connect} from 'react-redux';
import store, {fetchCampus, deleteStudent} from '../store'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class SingleCampus extends Component{
	
	componentDidMount(){
		const thisCampusId = parseInt(this.props.match.params.campusId)
		const campusThunk = fetchCampus(thisCampusId)
		store.dispatch(campusThunk)
	}
	render(){
		const filtered_list = this.props.students.filter(student=>{
			return(parseInt(student.campusId) === parseInt(this.props.campusId))
		})
		return(
		<div> 
			<h1>{this.props.campus.name}</h1>
				<Grid>
				<Row>
					<LinkContainer to={`/campuses/${this.props.campus.id}/addStudent`} >
						<Button> Add Student </Button>
					</LinkContainer>	
				</Row>
				{filtered_list.map(student=> {
					return(  
						
							<Row key={'students'+student.id}>
								<h2 > {student.name} </h2> 

								<LinkContainer to={`/${student.id}/editStudent`} >
									<Button> Edit Student </Button>
								</LinkContainer>	
								<Button onClick={()=>this.props.handleDeleteClick(student.id)}> Delete Student </Button>
							</Row>


						)
				})}
				</Grid>
		</div>
		)
	}
	
}

function mapStateToProps(state, ownProps){
	return {
		campus : state.singleCampus,
		campusId : ownProps.match.params.campusId,
		students: state.students
	}
	
}

function mapDispatchToProps(dispatch){
	return {
		handleDeleteClick: function(studentId){

			dispatch(deleteStudent(studentId))
		}
	}
}

const container = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default container;