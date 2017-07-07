import {combineReducers} from "redux";



const pollsReducer = (state = {}, action) => {
	switch(action.type) {
	case "VOTE":
	case "ADD_POLL":
		return {
			...state,
			[action.topic]: pollReducer(state[action.topic], action)
		}
	
	case "DELETE_POLL":
		return {
			...state,
			[action.topic]: null
		}
	}
	return state;
}


const creatorReducer = (state = null, action) => {
	switch(action.type) {
	case "ADD_POLL": 
		return action.creator;
	}
	return state;
}

const votedReducer = (state = {}, action) => {
	switch(action.type) {
	case "VOTE": 
		return {
			...state, 
			[action.user]: true
		}
	}
	return state;
}

const optionsReducer = (state = {}, action) => {

	switch(action.type) {

	case "VOTE":
		return {
			...state,
			[action.option]: ++state[action.option] || 1
		}
	
	case "ADD_POLL":
		return {
			...action.options
		}
	}
	return state;
}


const appReducer = combineReducers({polls: pollsReducer});

const pollReducer = combineReducers({
	creator: creatorReducer,
	voted: votedReducer,
	options: optionsReducer,
	id: (state = null) => state
})




export default appReducer;




