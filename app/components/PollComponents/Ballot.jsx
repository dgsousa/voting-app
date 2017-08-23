import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


import {vote} from "../../actions/actionCreators.jsx";
import VoteOptions from "./VoteOptions.jsx";


class Ballot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: "",
			hasVoted: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.castVote = this.castVote.bind(this);
	}

	hasVoted(voted) {
		if(voted) this.setState({hasVoted: true})
	}

	componentWillMount() {
		this.setState({option: this.props.options && this.props.options[0]});
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({option: e.target.value});

	}

	castVote(e) {
		const {voted, id} = this.props;
		const {option} = this.state;
		this.props.vote(id, option);
		this.refs.input.value = "";
		this.hasVoted(voted);
	} 

	render() {
		const {id, options, user, vote, voted} = this.props;
		const {option, hasVoted} = this.state;
		
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
		)
	}
}


const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const options = state.polls[id] && Object.keys(state.polls[id].options) || [];
	const voted = state.polls[id] && Object.keys(state.polls[id].voted).indexOf(state.user) > -1;
	return {id, options, voted};
}



Ballot = withRouter(connect(
	mapStateToProps, 
	{vote}
)(Ballot));

export default Ballot;









