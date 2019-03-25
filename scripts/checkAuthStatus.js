// listen for auth status chnages

// const firebase = require('firebase');
// const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
	if (user) {
		console.log('user logged in');
	} else {
		console.log('user logged out');
	}
});
