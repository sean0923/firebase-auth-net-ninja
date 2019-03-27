// listen for auth status chnages

// const firebase = require('firebase');
// const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
	if (user) {
		console.log('user logged in');

		// add "admin" key to user
		user.getIdTokenResult().then((idTokenResult) => {
			user.admin = idTokenResult.claims.admin;
			renderNavbar(user);
		});

		toggleAccountDetailInfo(user);
		getData();
	} else {
		console.log('user logged out');

		renderNavbar();
		toggleAccountDetailInfo();
		// not logged in so render empty list
		renderGuides([]);
	}
});
