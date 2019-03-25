const renderGuides = (docs) => {
	const guideList = document.querySelector('.guides');

	let innerHtml = '';

	if(docs.length) {
		docs.forEach((doc) => {
			const guide = doc.data();
	
			const li = `
				<li>
					<div class="collapsible-header grey lighten-4">${guide.title}</div>
					<div class="collapsible-body white">${guide.content}</div>
				</li>
			`;
	
			innerHtml += li;
		});
	} else {
		innerHtml = `<h5 class="center">Please login to see the list</h5>`;
	}


	guideList.innerHTML = innerHtml;
};

// get data

// const firebase = require('firebase');
// const db = firebase.firestore();

// db.collection('guides').get().then((snapshot) => {
// 	renderGuides(snapshot.docs);
// });
