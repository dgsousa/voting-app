import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import appReducer from "../reducers/reducer.jsx";

const createStoreWithMiddleWare = compose(
	applyMiddleware(thunk), 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

const store = createStoreWithMiddleWare(appReducer);

export default store;