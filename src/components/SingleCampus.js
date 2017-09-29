import React, {Component} from 'react';
import {connect} from 'react-redux';
import store, {fetchCampus} from '../store'
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
			return(parseInt(student.campus.id) === parseInt(this.props.campusId))
		})
		return(
		<div> 
			<h1>{this.props.campus.name}</h1>
				<Grid>
				<Row>
					<LinkContainer to={`/campuses/${this.props.campus.id}/addStudent`} >
						<Button>AddStudent </Button>
					</LinkContainer>	
				</Row>
				{filtered_list.map(student=> {
					return(  
						
							<Row key={student.id}>
								<h2 > {student.name} </h2> 

								<Button> Edit </Button>
								<Button> Delete </Button>
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

const container = connect(mapStateToProps)(SingleCampus)

export default container;