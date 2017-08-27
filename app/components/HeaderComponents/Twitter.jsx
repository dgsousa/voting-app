import React from "react";

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

export default Twitter;