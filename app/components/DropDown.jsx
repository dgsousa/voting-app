import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


import {vote} from "../actions/actionCreators.jsx";


class DropDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: ""
		} 
	}

	componentWillMount() {
		this.setState({option: this.props.options && this.props.options[0]});
	}

	handleChange(e) {
		this.setState({option: e.target.value});
	}

	render() {
		const {id, options, user, vote, tweet} = this.props;
		const {option} = this.state;
		
		return (
			<div>
				<select onChange={this.handleChange.bind(this)}>
					{options.map((option, index) => 
						<option key={index} value={option}>{option}</option>
					)}
				</select>
				<label>Custom: </label>
				<input type="text" onChange={this.handleChange.bind(this)}/>
				<button type="submit" onClick={(e) => vote(id, option)}>Submit</button>
				<NavLink 
						to={"https:\/\/twitter.com/intent/tweet?text=" + tweet}  
						target="_blank">Tweet</NavLink>
			</div>
		)
	}
}


const mapStateToProps = (state, ownProps) => ({
	id: ownProps.match.params.id,
	options: state.polls[ownProps.match.params.id] && Object.keys(state.polls[ownProps.match.params.id].options) || [],
	tweet: state.polls[ownProps.match.params.id] && encodeURIComponent(`${state.polls[ownProps.match.params.id].topic} | localhost:3000/polls/${ownProps.match.params.id}`)
})




const DropDownContainer = withRouter(connect(
	mapStateToProps, 
	{vote}
)(DropDown));

export default DropDownContainer;









