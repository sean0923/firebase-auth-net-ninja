const logout = document.querySelector('#logout');

// const {auth} = require('firebase');
// auth().signOut()

logout.addEventListener('click', (e) => {
	e.preventDefault();

	auth.signOut().then(() => {}).catch((error) => {
		console.log('error: ', error);
	});
});
