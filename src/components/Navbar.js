import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation(){
	return(
		<Navbar fluid={true}>
			<Nav>
					<LinkContainer to="/#">
						<NavItem eventKey={1}> Home </NavItem>
					</LinkContainer>
					<LinkContainer to="/students">
						<NavItem eventKey={2}> Students </NavItem>
					</LinkContainer>
					<LinkContainer to="/campuses">
						<NavItem eventKey={3}> Campuses </NavItem>
					</LinkContainer>
			</Nav>
		</Navbar>
		)
}

