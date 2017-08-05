import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addPoll} from "../../actions/actionCreators.jsx";


import SubmitNewPoll from "./SubmitNewPoll.jsx";



class NewPoll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: "",
			options: [] 
		}
		this.updateTopic = this.updateTopic.bind(this);
		this.updateOptions = this.updateOptions.bind(this);
		this.addNewPoll = this.addNewPoll.bind(this);
	}
	
	updateTopic(e) {
		this.setState({topic: e.target.value});
	}

	updateOptions(e) {
		const options = e.target.value ? e.target.value.split(",") : []
		this.setState({options: options});
	}

	addNewPoll(e) {
		const {addPoll, user} = this.props;
		const {topic, options} = this.state;
		addPoll(topic, options, user);
	}
	
	render() {
		const {topic, options} = this.state;
		const {user} = this.props;
		return (
			<div className="new-poll">
				<h1>Create A New Poll</h1>
				<div>
					<input type="text" value={topic} onChange={this.updateTopic} placeholder="Title"/>
				</div>
				<div>
					<input type="textarea" value={options} onChange={this.updateOptions} placeholder="Options (separated by a comma)"/>
				</div>
				<SubmitNewPoll options={options} topic={topic} onChange={this.addNewPoll}/>
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



