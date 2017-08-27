import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const SubmitNewPoll = ({topic, options, onChange}) =>
	<div className="submit-new-poll">
		<button className="new-poll-button" onClick={onChange}>
			{topic && options.length ? <Link to={"/"}>SUBMIT</Link> : "SUBMIT"}
		</button>
	</div>;

SubmitNewPoll.PropTypes = {
	topic: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
};


export default SubmitNewPoll;