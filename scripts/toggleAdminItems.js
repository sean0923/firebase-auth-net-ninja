const adminItems = document.querySelectorAll('.admin');

const toggleAdminItems = (user) => {
	if (user && user.admin) {
		adminItems.forEach((item) => (item.style.display = 'block'));
	} else {
		adminItems.forEach((item) => (item.style.display = 'none'));
	}
};
