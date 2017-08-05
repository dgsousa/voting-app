import React from "react";
import {connect} from "react-redux";


import Topic from "./Topic.jsx";



let MyPolls = ({polls, user}) => {

	const topics = Object.keys(polls).map(id => {
		if(polls[id] && polls[id].creator === user) return <Topic key={id} id={id}/>;
	})

	return (
		<div className="poll-list">
			<h1>{`${user}'s`} Polls</h1>
			<ul>
				{topics}
			</ul>
		</div>
	)
	
}


const mapStateToProps = (state) => ({
	polls: state.polls,
	user: state.user
})

	

MyPolls = connect(
	mapStateToProps
)(MyPolls);


export default MyPolls;