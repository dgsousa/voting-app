import React from "react";
import {redirectToLogin, signOut} from "../authorization";
import {connect} from "react-redux";

let Login = ({user, signOut}) =>
	<button 
		className="login" 
		onClick={ user ? signOut : redirectToLogin }>
		{user ? "Logout" : "Login"}
	</button>


const mapStateToProps = (state) => ({
	user: state.user
})


Login = connect(
	mapStateToProps,
	{signOut}
)(Login);

export default Login;