const router = require('express').Router();

// GET request for homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

// GET request for login page
router.get('/login', async (req, res) => {
  res.render('loginpage');
});

// GET request for the signup page
router.get('/signup', async (req, res) => {
  res.render('signup');
})

// GET request for Journal Page
router.get('/journal', async (req, res) => {
  res.render('journalpage');
});

module.exports = router;
