
const getApiKey = () => {
	let key = "";
	for(let i = 1; i <= 26; i++) {
		key += process.env[`PKL${i}`] + "\n";
	}
	return key;
}

const key = getApiKey();


module.exports = {
	"type": "service_account",
	"project_id": "voting-app-9a2b1",
	"private_key_id": "4620d74309b3c80719c68aa4aae495de3f979291", //stored in heroku
	"private_key": `-----BEGIN PRIVATE KEY-----\n${key}-----END PRIVATE KEY-----\n`, //stored in heroku
	"client_email": "firebase-adminsdk-eo9zs@voting-app-9a2b1.iam.gserviceaccount.com",
	"client_id": "107222254891823127170", //stored in heroku
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://accounts.google.com/o/oauth2/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eo9zs%40voting-app-9a2b1.iam.gserviceaccount.com"
}
