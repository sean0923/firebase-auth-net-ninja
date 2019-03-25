const toggleAccountDetailInfo = (user) => {
	const accountDetail = document.querySelector('.account-details');

	if (user) {
		db.collection('users').doc(user.uid).get().then((doc) => {
			accountDetail.innerHTML = `
        <div>Logged in as ${user.email}</div>
        <div>${doc.data().bio}</div>
    `;
		});
	} else {
		accountDetail.innerHTML = '';
	}
};
