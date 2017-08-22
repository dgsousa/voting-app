module.exports = {
  "type": "service_account",
  "project_id": "voting-app-9a2b1",
  "private_key_id": process.env.PRIVATE_KEY_ID, //stored in heroku
  "private_key": process.env.PRIVATE_KEY, //stored in heroku
  "client_email": "firebase-adminsdk-eo9zs@voting-app-9a2b1.iam.gserviceaccount.com",
  "client_id": process.env.CLIENT_ID, //stored in heroku
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eo9zs%40voting-app-9a2b1.iam.gserviceaccount.com"
}
