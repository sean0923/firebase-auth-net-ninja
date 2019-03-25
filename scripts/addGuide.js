// create new guide
const createForm = document.querySelector('#create-form');

// *
// const db = require('firebase').firestore();
// *

createForm.addEventListener('submit', (e) => {
	e.preventDefault();

	db
		.collection('guides')
		.add({
			title: createForm['title'].value,
			content: createForm['content'].value,
		})
		.then(() => {
			// close the modal and reset form
			const modal = document.querySelector('#modal-create');
			M.Modal.getInstance(modal).close();
			createForm.reset();
		});
});
