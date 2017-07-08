import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {deletePoll} from "../actions/actionCreators.jsx";


let MyPolls = ({polls, deletePoll}) => 
	<div>
		<ul>{polls.map((poll, index) => {
				const location = `/polls/${poll}`;
				return (
					<li key={index}>
						<NavLink to={location}>{poll}</NavLink>
						<button onClick={(e) => {deletePoll(poll)}}>Delete Poll</button>
					</li>
				)
			})}
		</ul>
	</div>



const mapStateToProps = (state) => ({
	polls: Object.keys(state.polls).filter(key => state.polls[key] && state.polls[key].creator === state.user)
})

	

MyPolls = connect(
	mapStateToProps,
	{deletePoll}
)(MyPolls);


export default MyPolls;