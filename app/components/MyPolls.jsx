import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {deletePoll} from "../actions/actionCreators.jsx";


let MyPolls = ({polls, deletePoll}) => 
	<div>
		<ul>{polls.map((topic, index) => {
				const location = `/polls/${topic}`;

				return (
					<li key={index}>
						<NavLink to={location}>{topic}</NavLink>
						<button onClick={(e) => {deletePoll(topic, "beta")}}>Delete Poll</button>
					</li>
				)
			})}
		</ul>
	</div>



const mapStateToProps = (state) => ({
	polls: Object.keys(state.polls).filter(poll => {
		if(state.polls[poll] && state.polls[poll].creator === "beta") return state.polls[poll];
	})
})

	

MyPolls = connect(
	mapStateToProps,
	{deletePoll}
)(MyPolls);


export default MyPolls;