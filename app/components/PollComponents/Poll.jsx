import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Chart from "./Chart.jsx";
import Ballot from "./Ballot.jsx";
import Title from "./Title.jsx";

const Poll = ({poll}) => 
	<div className="poll">
		<Title poll={poll}/>
		<div className="panel">
			<Ballot poll={poll}/>
			<Chart poll={poll}/>
		</div>
	</div>;


const mapStateToProps = (state, ownProps) => ({
	poll: Object.keys(state.polls).reduce((prev, curr) => {
		return curr === ownProps.match.params.id ? state.polls[curr] : prev;
	}, null)
});


Poll.PropTypes = {
	poll: PropTypes.object.isRequired
};


export default connect(mapStateToProps)(Poll);


