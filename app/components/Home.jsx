import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


let Home = ({polls}) => 
	<div>
		<ul>{polls.map((poll, index) => {
				const location = `/polls/${poll}`;
				return (
					<li key={index}>
						<NavLink to={location}>{poll}</NavLink>
					</li>
				)	
			})}
		</ul>
	</div>


const mapStateToProps = (state) => ({
	polls: Object.keys(state.polls).filter(key => state.polls[key])
})

	
Home = connect(mapStateToProps)(Home);


export default Home;

