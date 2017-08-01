import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


import {vote} from "../actions/actionCreators.jsx";


class Ballot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: "",
			hasVoted: false
		} 
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

	render() {
		const {id, options, user, vote, voted} = this.props;
		const {option, hasVoted} = this.state;
		
		return (
			<div className="ballot">
				<div className="ballot-header"><h2>Cast a Vote</h2></div>
				<form>
					
					<ul>
						{options.map((option, index) => 
							<li key={index}>
								<button 
								  	value={option}
								  	onClick={this.handleChange.bind(this)}>
								 {option}
								 </button>
								 
							</li>
						)}
					</ul>
					
					<input 
						type="text"
						placeholder={"Custom"} 
						onChange={this.handleChange.bind(this)}
						ref="input"/>
						
				</form>
				<div className="ballot-button">
					<button 
						className="vote-button" 
						type="submit" 
						onClick={(e) => {
							vote(id, option);
							this.refs.input.value = "";
							this.hasVoted(voted)
						}}>
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
	return {
		id: id,
		options: options,
		voted: voted
	}
}



Ballot = withRouter(connect(
	mapStateToProps, 
	{vote}
)(Ballot));

export default Ballot;









