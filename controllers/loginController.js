const path = require('path');
const config = require('config');
const nodemailer = require('nodemailer');
const User = require("../models/User");

// wyswietla strone logowania
const loginView = (req, res) => {
	res.sendFile(path.join(__dirname + '/../views/login.html'));
};

// obsluguje logike logowania
const loginUser = (req, res) => {
	const {username, password} = req.body;

	// Ensure the input fields exists and are not empty
	if (!username || !password) {
		res.send('Please enter username and password! Try to <a href="/" class="text signup-link">Login</a> again');
	}

	User.findOne({ name: username }).then((user) => {
		if (user && user.password === password) {
			// Authenticate the user
			req.session.loggedin = true;
			req.session.username = username;
			// Redirect to home page
			res.redirect('/home');
		} else {
			res.send('Incorrect Username and/or Password! Try to <a href="/" class="text signup-link">Login</a> again');
		}
	});
};

// wyswietla strone do rejestracji
const signUpView = (req, res) => {
	res.sendFile(path.join(__dirname + '/../views/signup.html'));
};

// obsluguje logike rejestracji
const signUpUser = (req, res) => {
	
	const {username, email, password, confirm} = req.body;

	// Ensure the input fields exists and are not empty
	if (!username || !email || !password || !confirm) {
		res.send('Please enter username, email and password!');
	}

	if(password !== confirm) {
		res.send(`Passwords don't match!`);
	}
	else {
		User.findOne({ email: email }).then((user) => {
			if (user) {
				res.send(`Username already exists! Try to <a href="/" class="text signup-link">Login</a>`);
			} else {
			    const newUser = new User({
				    name: username,
				    email: email,
				    password: password,
			    });
			
				newUser
					.save()
					.then(res.send(`Usear has been succesfully created. Try to <a href="/" class="text signup-link">Login</a>`))
					.catch((err) => console.log(err));
			}
		});			
	}
};

// wyswietla strone do przypomnienia hasla
const passwordReminderView = (req, res) => {
	res.sendFile(path.join(__dirname + '/../views/password.html'));
};

// obsluguje logike przypomnienia hasla
const passwordReminder = (req, res) => {
	const {username, email } = req.body;

	// Ensure the input fields exists and are not empty
	if (!username || !email ) {
		res.send('Please enter username, email!');
	}
	
	User.findOne({ email: email }).then((user) => {
		if (user && user.name === username) {
			let password = user.password;

			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: config.get('mail.user'),
					pass: config.get('mail.password')
				}
			});
			var mailOptions = {
				from: 'noreply@gmail.com',
				to: email,
				subject: 'password reminder',
				html: `<h3>Dear <b>${username}</b>, here's your current password: </h3><p><h1>${password}</h1></p>`
			};
				  
			transporter.sendMail(mailOptions, function(error, info){
				if (error) {
					console.log(error);
				} else {
					console.log('Email sent: ' + info.response);
				}
			});

			res.send(`Check your email and try to <a href="/" class="text signup-link">Login</a> again`);
		} else {
			res.send('Incorrect Username and/or email!');
		}
	});
};

// obsluguje logike wylogowania uzytkownika
const logoutUser = (req, res, next) => {
    if (req.session.loggedin) {
          req.session.loggedin = false;
    }
    res.redirect('/');
};

module.exports = {
    signUpView,
    loginView,
    passwordReminderView,
    signUpUser,
    loginUser,
    logoutUser,
    passwordReminder
};