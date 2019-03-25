const signupForm = document.querySelector('#signup-form');

// const firebase = require('firebase');
// firebase.auth().createUserWithEmailAndPassword;

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = signupForm['signup-email'].value;
	const password = signupForm['signup-password'].value;
	const bio = signupForm['signup-bio'].value;

	auth
		.createUserWithEmailAndPassword(email, password)
		.then((cred) => {
			console.log('cred: ', cred.user);

			return db.collection('users').doc(cred.user.uid).set({ bio });
		})
		.then(() => {
			const modal = document.querySelector('#modal-signup');
			M.Modal.getInstance(modal).close();
			signupForm.reset();
		})
		.catch((error) => {
			console.log('error: ', error);
		});
});
