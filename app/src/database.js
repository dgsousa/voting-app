import * as firebase from "firebase";


const createDatabase = config => {
	firebase.initializeApp(config);
	return firebase.database();
} 



export default createDatabase;