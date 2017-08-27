import React from "react";
import PropTypes from "prop-types";

const Title = ({poll}) =>
	<div className="poll-title">
		<h1>{poll && poll.topic}</h1>
	</div>;

Title.PropTypes = {
	poll: PropTypes.object.isRequired
};


export default Title;