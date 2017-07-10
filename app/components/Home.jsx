import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


let Home = ({polls}) => 
	<div>
		<ul>{Object.keys(polls).map((id) => {
				if(polls[id]) {
					const location = `/polls/${id}`;
					const topic = polls[id].topic;
					return (
						<li key={id}>
							<NavLink to={location}>{topic}</NavLink>
						</li>
					)	
				}
			})}
		</ul>
	</div>


const mapStateToProps = (state) => ({
	polls: state.polls
})

	
Home = connect(mapStateToProps)(Home);


export default Home;

