const renderGuides = (docs) => {
	const guideList = document.querySelector('.guides');

	let innerHtml = '';

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

	guideList.innerHTML = innerHtml;
};

// get data

// const firebase = require('firebase');
// const db = firebase.firestore();

// db.collection('guides').get().then((snapshot) => {
// 	renderGuides(snapshot.docs);
// });
