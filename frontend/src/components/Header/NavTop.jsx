import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../Assets/logo.png';
import './logo.css';

class NavTop extends Component {
	render() {
		return (
			<div className="row">
				<Navbar>
					<Navbar.Brand href="/">
						<img className="logo" src={logo} alt="YMIM" />
					</Navbar.Brand>
					<ul className="nav-links">
						<li className="nav-item">
							<NavLink className="nav-link" to="/about" activeClassName="nav-link-selected">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/contact-us" activeClassName="nav-link-selected">
								Contact
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/events" activeClassName="nav-link-selected">
								Events
							</NavLink>
						</li>
						<li className="col footer_link">
							<a href="https://www.facebook.com/theymim/" style={{ color: 'black' }}>
								<FontAwesomeIcon icon={faFacebookSquare} />
							</a>

							<a href="https://www.instagram.com/theyoungmasterbuilders" style={{ color: 'black' }}>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
					</ul>
				</Navbar>
			</div>
		);
	}
}

export default NavTop;