const loggedInNavItems = document.querySelectorAll('.logged-in');
const loggedOutNavItems = document.querySelectorAll('.logged-out');

const renderNavbar = (isAuthenticated) => {
	if (isAuthenticated) {
		loggedInNavItems.forEach((navItem) => (navItem.style.display = 'block'));
		loggedOutNavItems.forEach((navItem) => (navItem.style.display = 'none'));
	} else {
		loggedInNavItems.forEach((navItem) => (navItem.style.display = 'none'));
		loggedOutNavItems.forEach((navItem) => (navItem.style.display = 'block'));
	}
};
