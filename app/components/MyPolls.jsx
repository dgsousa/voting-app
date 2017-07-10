import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {deletePoll} from "../actions/actionCreators.jsx";


let MyPolls = ({polls, user, deletePoll}) => 
	<div>
		<ul>{Object.keys(polls).map((id) => {
				if(polls[id] && polls[id].creator === user) {
					const location = `/polls/${id}`;
					const topic = polls[id].topic;
					return (
						<li key={id}>
							<NavLink to={location}>{topic}</NavLink>
							<button onClick={(e) => {deletePoll(id)}}>Delete Poll</button>
						</li>
					)
				}
			})}
		</ul>
	</div>


const mapStateToProps = (state) => ({
	polls: state.polls,
	user: state.user
})

	

MyPolls = connect(
	mapStateToProps,
	{deletePoll}
)(MyPolls);


export default MyPolls;