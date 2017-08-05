import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deletePoll} from "../../actions/actionCreators.jsx";

class Topic extends Component {
	constructor(props) {
		super(props);
		this.deleteMyPoll = this.deleteMyPoll.bind(this);
	}

	deleteMyPoll(e) {
		const {id, deletePoll} = this.props;
		deletePoll(id);
	}


	render() {
		const {polls, id} = this.props;
		return (
			<li key={id}>
				<Link to={`/polls/${id}`}>{polls[id].topic}</Link>
				<button 
					className = "delete"
					onClick={this.deleteMyPoll}>
					X
				</button>
			</li>
		)
	}
}


const mapStateToProps = (state, ownProps) => ({
	polls: state.polls,
	id: ownProps.id
})

Topic = connect(
	mapStateToProps,
	{deletePoll}
)(Topic);

export default Topic;

