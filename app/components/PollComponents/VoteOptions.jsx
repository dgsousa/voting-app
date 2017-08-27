import React from "react";
import PropTypes from "prop-types";

const VoteOptions = ({options, onChange}) =>
	<ul>
		{options.map((option, index) => 
			<li key={index}>
				<button 
					value={option}
					onClick={onChange}>
					{option}
				</button>
			</li>
		)}
	</ul>;

VoteOptions.PropTypes = {
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
};


export default VoteOptions;