import React from "react";
import PropTypes from "prop-types";

const Twitter = ({tweet}) => 
	<div className="twitter">
		{ 	!!tweet && 
			<a
				href={`https://twitter.com/intent/tweet?text=${tweet}`}
				target="_blank">
				<img src="/static/images/twitter.svg" width="30px"/>
			</a>
		}
	</div>;

Twitter.PropTypes = {
	tweet: PropTypes.string.isRequired
};


export default Twitter;