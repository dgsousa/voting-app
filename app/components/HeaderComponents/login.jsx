import React from "react";
import PropTypes from "prop-types";


import {redirectToLogin, signOut} from "../../src/authorization";
import {connect} from "react-redux";

const Login = ({user, signOut}) =>
	<button 
		className="login" 
		onClick={ user ? signOut : redirectToLogin }>
		<span>{user ? "Logout" : "Login"}</span>
	</button>;


const mapStateToProps = (state) => ({
	user: state.user
});


Login.PropTypes = {
	user: PropTypes.string.isRequired,
	signOut: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	{signOut}
)(Login);

