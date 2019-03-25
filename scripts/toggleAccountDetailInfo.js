const toggleAccountDetailInfo = (user) => {
	const accountDetail = document.querySelector('.account-details');

	if (user) {
		accountDetail.innerHTML = `<div>Logged in as ${user.email}</div>`;
	} else {
		accountDetail.innerHTML = '';
	}
};
