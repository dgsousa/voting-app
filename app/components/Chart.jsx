import React from "react";
import {connect} from "react-redux";



let Chart = ({options}) => 
	<div>
		<ul>{Object.keys(options).map((option, index) => 
			<li key={index}>{`${option}: ${options[option]}`}</li>
		)}</ul>
	</div>


const mapStateToProps = (state, ownProps) => ({
	options: ownProps.poll.options
})



Chart = connect(
	mapStateToProps
)(Chart);
	

export default Chart;