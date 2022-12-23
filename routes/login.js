const express = require("express");

const {
    signUpView,
    loginView,
    passwordReminderView,
    signUpUser,
    loginUser,
    logoutUser,
    passwordReminder
} = require("../controllers/loginController");
const { 
    homeView, 
    profileView 
} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", loginView);

router.get("/signup", signUpView);
router.get("/passwd", passwordReminderView);
router.get("/logout", logoutUser);

router.post("/signup", signUpUser);
router.post("/passwd", passwordReminder);
router.post("/auth", loginUser);

router.get("/home", homeView);
router.get("/profile", profileView);

module.exports = router;