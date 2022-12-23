const User = require("../models/User");

// wyswietla strone domowa jesli uzytkownik jest zalogowany
const homeView = (req, res) => {
	
	let username = req.session.username;

	// wyswietl blad jesli uzytkownik nie jest zalogowany
	if (!username || !req.session.loggedin) {
		res.send('Please login first! <a href="/" class="text signup-link">Login</a>');
	}

	// wszystko ok, wygeneruj strone
	res.render("home", {
		page: 'Home page',
		username: username
	});

};

// wyswietla strone z profilem jesli uzytkownik jest zalogowany
const profileView = (req, res) => {
	
	let username = req.session.username;
	
	// wyswietl blad jesli uzytkownik nie jest zalogowany
	if (!username || !req.session.loggedin) {
		res.send('Please login first! <a href="/" class="text signup-link">Login</a>');
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