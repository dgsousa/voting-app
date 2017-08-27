import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Topic from "./Topic.jsx";



const MyPolls = ({polls, user}) => {

	const topics = Object.keys(polls).map(id => {
		if(polls[id] && polls[id].creator === user) return <Topic key={id} id={id}/>;
	});

	return (
		<div className="poll-list">
			<h1>{`${user}'s`} Polls</h1>
			<ul>
				{topics}
			</ul>
		</div>
	);
	
};


const mapStateToProps = (state) => ({
	polls: state.polls,
	user: state.user
});


MyPolls.PropTypes = {
	polls: PropTypes.object.isRequired,
	user: PropTypes.string.isRequired
};
	

export default connect(
	mapStateToProps
)(MyPolls);

