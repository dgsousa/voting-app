const admin = require("firebase-admin");

const serviceAccount = require("./service-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://voting-app-9a2b1.firebaseio.com"
});

const database = admin.database();

module.exports = database;


