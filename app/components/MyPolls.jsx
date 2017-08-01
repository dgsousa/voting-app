import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deletePoll} from "../actions/actionCreators.jsx";


let MyPolls = ({polls, user, deletePoll}) => 
	<div className="poll-list">
		<h1>{`${user}'s`} Polls</h1>
		<ul>{Object.keys(polls).map((id) => {
				if(polls[id] && polls[id].creator === user) {
					const location = `/polls/${id}`;
					const topic = polls[id].topic;
					return (
						<li key={id}>
							<Link to={location}>{topic}</Link>
							<button 
								className = "delete"
								onClick={(e) => {deletePoll(id)}}>
								X
							</button>
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