// listen for auth status chnages

// const firebase = require('firebase');
// const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
	if (user) {
		console.log('user logged in');

		renderNavbar(user);

		db.collection('guides').get().then((snapshot) => {
			renderGuides(snapshot.docs);
		});
	} else {
		console.log('user logged out');

		renderNavbar();

		// not logged in so render empty list
		renderGuides([]);
	}
});
