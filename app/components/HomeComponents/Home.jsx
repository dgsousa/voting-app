import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


let Home = ({polls}) => 
	<div className="poll-list">
		<h1>Choose a Poll</h1>
		<ul>
			{Object.keys(polls).map((id) => {
				if(polls[id]) {
					const location = `/polls/${id}`;
					const topic = polls[id].topic;
					return (
						<li key={id}>
							<Link to={location}><span>{topic}</span></Link>
						</li>
					);	
				}
			})}
		</ul>
	</div>;


const mapStateToProps = (state) => ({
	polls: state.polls
});

	
Home = connect(mapStateToProps)(Home);


export default Home;

