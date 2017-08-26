import React from "react";
import {connect} from "react-redux";


import ChartContainer from "./Chart.jsx";
import BallotContainer from "./Ballot.jsx";
import Title from "./Title.jsx";

let Poll = ({poll}) => 
	<div className="poll">
		<Title poll={poll}/>
		<div className="panel">
			<BallotContainer poll={poll}/>
			<ChartContainer poll={poll}/>
		</div>
	</div>;


const mapStateToProps = (state, ownProps) => ({
	poll: Object.keys(state.polls).reduce((prev, curr) => {
		return curr === ownProps.match.params.id ? state.polls[curr] : prev;
	}, null)
});

Poll = connect(mapStateToProps)(Poll);


export default Poll;