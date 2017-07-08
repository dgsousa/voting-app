import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {vote} from "../actions/actionCreators.jsx";


class DropDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: ""
		} 
	}

	componentWillMount() {
		this.setState({option: this.props.options[0]});
	}

	handleChange(e) {
		this.setState({option: e.target.value});
	}

	render() {
		const {poll, options, user, vote} = this.props;
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
				<button type="submit" onClick={(e) => vote(poll, option, user)}>Submit</button>
			</div>
		)
	}
}


const mapStateToProps = (state, ownProps) => ({
	poll: ownProps.match.params.poll,
	options: Object.keys(state.polls[ownProps.match.params.poll].options),
	user: state.user
})




const DropDownContainer = withRouter(connect(
	mapStateToProps, 
	{vote}
)(DropDown));

export default DropDownContainer;









