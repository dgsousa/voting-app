import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {addPoll} from "../actions/actionCreators.jsx";


class NewPoll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			poll: "",
			options: [] 
		}
	}
	
	updateTopic(e) {
		this.setState({poll: e.target.value});
	}

	updateOptions(e) {
		this.setState({options: e.target.value.split(",")});
	}
	
	render() {
		const {poll, options} = this.state;
		const {addPoll, user} = this.props;
		return (
			<div>
				<span>Title: </span><input type="text" value={poll} onChange={this.updateTopic.bind(this)}/>
				<span>Options: </span><input type="textarea" value={options} onChange={this.updateOptions.bind(this)}/>
				<NavLink to={`/polls/${poll}`}>
					<button onClick={(e) => addPoll(poll, options, user)}>Submit</button>
				</NavLink>
			</div>
		)
	}
};

const mapStateToProps = (state) => ({
	user: state.user
})


const NewPollContainer = connect(
	mapStateToProps,	
	{addPoll}
)(NewPoll);


export default NewPollContainer;



