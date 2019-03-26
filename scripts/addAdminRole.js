// add admin cloud function

// const functions = require('firebase').functions();

const adminForm = document.querySelector('.admin-actions');

adminForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const adminEmail = adminForm['admin-email'].value;
	console.log('adminEmail: ', adminEmail);
	const addAdminRole = functions.httpsCallable('addAdminRole');
	addAdminRole({ email: adminEmail }).then((result) => {
		console.log('result: ', result);
	});
});
