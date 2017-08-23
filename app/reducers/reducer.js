 import {combineReducers} from "redux";




const pollsReducer = (state = {}, action) => {
	switch(action.type) {
	case "VOTE":
	case "ADD_POLL":
		return {
			...state,
			[action.id]: pollReducer(state[action.id], action)
		}
	
	case "DELETE_POLL":
		return {
			...state,
			[action.id]: null
		}
	}
	return state;
}


const topicReducer = (state = null, action) => {
	switch(action.type) {
	case "ADD_POLL":
		return action.topic
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
	case "ADD_POLL":
	case "VOTE": 
		return {
			...action.voted
		}
	}
	return state;
}


const optionsReducer = (state = {}, action) => {
	switch(action.type) {
	case "ADD_POLL":
	case "VOTE":
		return {
			...action.options
		}
	}
	return state;
}

const userReducer = (state = null, action) => {
	switch(action.type) {
	case "SET_USER":
		return action.user;
	case "SIGN_OUT":
		return null;
	}

	return state;
}

const loadingReducer = (state = true, action) => {
	switch(action.type) {
	case "LOADING":
		return action.loading;
	}
	return state;
}

const destinationReducer = (state = {}, action) => {
	switch(action.type) {
	case "SET_DESTINATION":
		return {
			...state
		}
	}
	return state;
}


const appReducer = combineReducers({
	polls: pollsReducer,
	user: userReducer,
	loading: loadingReducer
});


const pollReducer = combineReducers({
	topic: topicReducer,
	creator: creatorReducer,
	voted: votedReducer,
	options: optionsReducer
})




export default appReducer;




