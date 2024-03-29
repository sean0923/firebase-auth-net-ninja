const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
	// check request is made by an admin
	if (context.auth.token.admin !== true) {
		return { error: 'only admins can add other admin' };
	}

	// get user and add custom clain (admin)
	return admin
		.auth()
		.getUserByEmail(data.email)
		.then((user) => {
			return admin.auth().setCustomUserClaims(user.uid, { admin: true });
		})
		.then(() => {
			return { message: `Sucess! ${data.email} has been mdde an admin` };
		})
		.catch((error) => {
			return error;
		});
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
