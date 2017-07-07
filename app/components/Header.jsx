import React from "react";
import {NavLink} from "react-router-dom";


const Header = () => 
	<div className="header">
		<div className="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/mypolls">My Polls</NavLink>
			<NavLink to="/newpoll">New Poll</NavLink>
		</div>
	</div>


export default Header;