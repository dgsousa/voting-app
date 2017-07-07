import React from "react";
import { BrowserRouter as Router, Route, IndexRoute} from "react-router-dom";
import Home from "./Home.jsx";
import MyPolls from "./MyPolls.jsx";
import NewPollContainer from "./NewPoll.jsx";
import Header from "./Header.jsx";
import Poll from "./Poll.jsx";



const App = () => 
	<Router>
		<div>
			<Route component={Header}/>
			<div className="main">
				<Route exact path="/" component={Home}/>
				<Route path="/polls/:topic" component={Poll}/>
				<Route path="/mypolls" component={MyPolls}/>
				<Route path="/newpoll" component={NewPollContainer}/>
			</div>
		</div>
	</Router>


export default App;