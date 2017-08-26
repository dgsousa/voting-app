import React from "react";
import {Link} from "react-router-dom";

const Twitter = ({tweet}) => 
	<div className="twitter">
		{ 	!!tweet && 
			<Link 
				to={"https://twitter.com/intent/tweet?text=" + tweet}  
				target="_blank">
				<img src="/static/images/twitter.svg" width="30px"/>
			</Link>
		}
	</div>;

export default Twitter;