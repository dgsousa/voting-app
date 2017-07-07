import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


let Home = ({polls}) => 
	<div>
		<ul>{Object.keys(polls).map((poll, index) => {
				if(polls[poll]) {
					const location = `/polls/${poll}`;
					return (
						<li key={index}>
							<NavLink to={location}>{poll}</NavLink>
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

