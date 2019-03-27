const toggleAccountDetailInfo = (user) => {
	const accountDetail = document.querySelector('.account-details');
	
	
	if (user) {
		// console.log('user.admin: ', user.admin);
		db.collection('users').doc(user.uid).get().then((doc) => {
			accountDetail.innerHTML = `
        <div>Logged in as ${user.email}</div>
				<div>${doc.data().bio}</div>
				<div class="pink-text">${user.admin ? 'Admin' : ''}</div>
    `;
		});
	} else {
		accountDetail.innerHTML = '';
	}
};
