import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {vote} from "../../actions/actionCreators.js";
import VoteOptions from "./VoteOptions.jsx";


class Ballot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: "",
			hasVoted: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.castVote = this.castVote.bind(this);
	}

	hasVoted(voted) {
		if(voted) this.setState({hasVoted: true});
	}

	componentWillMount() {
		this.setState({option: this.props.options && this.props.options[0]});
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({option: e.target.value});

	}

	castVote() {
		const {voted, id} = this.props;
		const {option} = this.state;
		this.props.vote(id, option);
		this.refs.input.value = "";
		this.hasVoted(voted);
	} 

	render() {
		const {options, voted} = this.props;
		const {hasVoted} = this.state;
		
		return (
			<div className="ballot">
				<div className="ballot-header"><h2>Cast a Vote</h2></div>
				<form>
					<VoteOptions options={options} onChange={this.handleChange}/>
					<input type="text" placeholder={"Custom"} onChange={this.handleChange} ref="input"/>	
				</form>
				<div className="ballot-button">
					<button className="vote-button" type="submit" onClick={this.castVote}>
						SUBMIT
					</button>
				</div>
				{voted && hasVoted && <span>You've already voted on this poll.</span>}
			</div>
		);
	}
}


const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const options = state.polls[id] && Object.keys(state.polls[id].options) || [];
	const voted = state.polls[id] && Object.keys(state.polls[id].voted).indexOf(state.user) > -1;
	return { id, options, voted };
};


Ballot.PropTypes = {
	id: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	voted: PropTypes.bool.isRequired,
	vote: PropTypes.func.isRequired
};


export default withRouter(connect(
	mapStateToProps, 
	{vote}
)(Ballot));











