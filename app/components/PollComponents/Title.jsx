import React from "react";


const Title = ({poll}) =>
	<div className="poll-title">
		<h1>{poll && poll.topic}</h1>
	</div>

export default Title;