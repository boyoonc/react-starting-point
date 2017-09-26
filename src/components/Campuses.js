import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'react-bootstrap'


function Campuses (props){
	console.log(props)
	return(
		<div>you're on campus!

			{
				props.campuses.map(campus => { return(
					<Jumbotron>
					    <h1>{campus.name}</h1>
					    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					    <p><Button bsStyle="primary">Learn more</Button></p>
					</Jumbotron>
				)})
			}
			

		</div>
		)
}

function mapStateToProps(state){
	return{
		campuses: state.campuses
	}
}

const container = connect(mapStateToProps)(Campuses)
export default container;