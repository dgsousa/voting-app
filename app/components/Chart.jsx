import React from "react";
import {connect} from "react-redux";



let Chart = ({options}) => 
	<div>
		<ul>{Object.keys(options).map((key, index) => 
			<li key={index}>{`${key}: ${options[key]}`}</li>
		)}</ul>
	</div>


const mapStateToProps = (state, ownProps) => ({
	options: ownProps.poll && ownProps.poll.options || []
})



Chart = connect(
	mapStateToProps
)(Chart);
	

export default Chart;