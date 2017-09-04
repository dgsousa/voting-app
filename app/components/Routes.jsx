import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
//components
import Header from "./HeaderComponents/Header.jsx";
import Poll from "./PollComponents/Poll.jsx";
import MyPolls from "./MyPollsComponents/MyPolls.jsx";
import NewPoll from "./NewPollComponents/NewPoll.jsx";
import Home from "./HomeComponents/Home.jsx";

const Routes = ({user}) => 
	<div>
		<Route component={Header}/>
		<div className="main">
			<Switch>
				<Route path={"/polls/:id"} component={Poll}/>
				{user && <Route path={"/mypolls"} component={MyPolls}/> }
				{user && <Route path={"/newpoll"} component={NewPoll}/> }
				<Route path={"/"} component={Home}/>
			</Switch>
		</div>
	</div>;


const mapStateToProps = (state) => ({user: state.user});

export default withRouter(connect(mapStateToProps)(Routes));

Routes.PropTypes = {
	user: PropTypes.string.isRequired
};