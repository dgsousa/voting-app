import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

//components
import MyPolls from "./MyPolls.jsx";
import NewPollContainer from "./NewPoll.jsx";


class EnsureLoggedIn extends Component {


	render() {
		return (this.props.user) ? 
			<div>
				<Route path="/mypolls" component={MyPolls}/>
				<Route path="/newpoll" component={NewPollContainer}/>
			</div>
		 	: <Redirect to="/"/>
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const EnsureLoggedInContainer = connect(mapStateToProps)(EnsureLoggedIn);


export default EnsureLoggedInContainer;