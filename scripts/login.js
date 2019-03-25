const loginForm = document.querySelector('#login-form');

// const firebase = require('firebase');
// const auth = firebase.auth()
// auth.signInWithEmailAndPassword

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = loginForm['login-email'].value;
	const password = loginForm['login-password'].value;

	auth
		.signInWithEmailAndPassword(email, password)
		.then((cred) => {
			console.log('cred: ', cred.user);

			const modal = document.querySelector('#modal-login');
			M.Modal.getInstance(modal).close();
			loginForm.reset();
		})
		.catch((error) => {
			console.log('error: ', error);
		});
});
