import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {addPoll} from "../actions/actionCreators.jsx";


class NewPoll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: "",
			options: [] 
		}
	}
	
	updateTopic(e) {
		this.setState({topic: e.target.value});
	}

	updateOptions(e) {
		this.setState({options: e.target.value.split(",")});
	}
	
	render() {
		const {topic, options} = this.state;
		const {addPoll} = this.props;
		return (
			<div>
				<span>Title: </span><input type="text" value={topic} onChange={this.updateTopic.bind(this)}/>
				<span>Options: </span><input type="textarea" value={options} onChange={this.updateOptions.bind(this)}/>
				<NavLink to={`/polls/${topic}`}>
					<button onClick={(e) => addPoll(topic, options, "beta")}>Submit</button>
				</NavLink>
			</div>
		)
	}
};


const NewPollContainer = connect(
	null,	
	{addPoll}
)(NewPoll);


export default NewPollContainer;



