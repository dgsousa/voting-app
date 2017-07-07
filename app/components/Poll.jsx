import React from "react";
import {connect} from "react-redux";
import Chart from "./Chart.jsx";
import DropDownContainer from "./DropDown.jsx";


let Poll = ({poll}) => 
	<div>
		<DropDownContainer poll={poll}/>
		<Chart poll={poll}/>
	</div>


const mapStateToProps = (state, ownProps) => ({
	poll: Object.keys(state.polls).reduce((prev, curr) => {
		return curr === ownProps.match.params.topic ? state.polls[curr] : prev;
	}, null)
})

Poll = connect(mapStateToProps)(Poll);


export default Poll;