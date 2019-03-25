// listen for auth status chnages

// const firebase = require('firebase');
// const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
	if (user) {
		console.log('user logged in');

		renderNavbar(user);
		getData();
	} else {
		console.log('user logged out');

		renderNavbar();

		// not logged in so render empty list
		renderGuides([]);
	}
});
