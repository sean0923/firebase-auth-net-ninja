const signupForm = document.querySelector('#signup-form');

// const firebase = require('firebase');
// firebase.auth().createUserWithEmailAndPassword;

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = signupForm['signup-email'].value;
	const password = signupForm['signup-password'].value;
	// auth.createUserWithEmailAndPassword()

	auth.createUserWithEmailAndPassword(email, password).then((cred) => {
		console.log('cred: ', cred.user);

		const modal = document.querySelector('#modal-signup');
		M.Modal.getInstance(modal).close();
		signupForm.reset();
	});
});
