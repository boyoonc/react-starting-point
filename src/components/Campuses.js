import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap'


function Campuses (props){
	console.log(props)
	return(
		<div>you're on campus!

			{
				props.campuses.map(campus => { return(
					<Jumbotron key={campus.name}>
						<Row>
							<Col md={3} />
							<Col md={6}> 
								<h1 className = "vertical-center">{campus.name}</h1>
							</Col>
						</Row>
					    <Row>
					    	<Col md={3} />
					    	<Col md={6}>
						    	<p><Button bsStyle="primary">See Students</Button></p>
						    </Col>
					    </Row>
					    
					</Jumbotron>
				)})
			}
			

		</div>
		)
}

function mapStateToProps(state){
	return {
		campuses: state.campuses
	}
}

const container = connect(mapStateToProps)(Campuses)
export default container;