const User = require("../models/User");

// wyswietla storne domowa jesli uzytkownik jest zalogowany
const homeView = (req, res) => {
	if (req.session.loggedin) {
		res.render("home", {
			page: 'Home page',
			username: req.session.username
		});
	} else {
		res.redirect('/');
	}
};

// wyswietla strone z profilem
const profileView = (req, res) => {
	let username = req.session.username;
	// Ensure the input fields exists and are not empty
	if (!username || !req.session.loggedin) {
		res.send('Please login first!');
	}

	User.findOne({ name: username }).then((user) => {
		if (user) {
			// renderuje stronke ze zmiennymi
			res.render("profile", {
				page: 'Profile page',
				username: user.name,
				password: user.password,
				email: user.email,
				date: user.date
			  });
		} else {
			res.send('Incorrect Username and/or Password!');
		}
	});
};

module.exports = {
	homeView,
    profileView,
};