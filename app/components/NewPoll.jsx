import React, {Component} from "react";
import {Link} from "react-router-dom";
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
		const options = e.target.value ? e.target.value.split(",") : []
		this.setState({options: options});
	}
	
	render() {
		const {topic, options} = this.state;
		const {addPoll, user} = this.props;
		return (
			<div className="new-poll">
				<h1>Create A New Poll</h1>
				<div>
					<input 
						type="text" 
						value={topic} 
						onChange={this.updateTopic.bind(this)}
						placeholder="Title"/>
				</div>
				<div>
					<input 
						type="textarea" 
						value={options} 
						onChange={this.updateOptions.bind(this)}
						placeholder="Options (separated by a comma)"/>
				</div>
				<div className="submit-new-poll">
					
					<button className="new-poll-button" onClick={(e) => addPoll(topic, options, user)}>
						{topic && options.length ? <Link to={`/`}>SUBMIT</Link> : "SUBMIT"}
					</button>
					
				</div>
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



