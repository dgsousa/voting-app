import React from "react";
import {Link} from "react-router-dom";


const SubmitNewPoll = ({topic, options, onChange}) =>
	<div className="submit-new-poll">
		<button className="new-poll-button" onClick={onChange}>
			{topic && options.length ? <Link to={"/"}>SUBMIT</Link> : "SUBMIT"}
		</button>
	</div>;


export default SubmitNewPoll;