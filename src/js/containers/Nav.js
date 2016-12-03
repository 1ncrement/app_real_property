/**
 * Created by Increment on 27.11.2016.
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../store/actions/userActions'
import {Link} from 'react-router'

class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">Home</Link>
					</div>
					<div className="navbar-collapse collapse">
						<ul className="nav navbar-nav navbar-right">
							<li key="nea"><Link className="btn btn-default" to="/nea">no suck</Link></li>
							<li key="login"><Link className="btn btn-default" to="/login">Sign In</Link></li>
							<li key="reg"><Link className="btn btn-success" to="/registration">Sign Up</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default connect(
	({user}) => {
		return {user}
	},
	dispatch => {
		return {
			actions: bindActionCreators(actions, dispatch)
		}
	}
)(Nav)