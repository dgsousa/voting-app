import React from "react";


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




export default VoteOptions;