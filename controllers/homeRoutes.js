const router = require('express').Router();

// GET request for homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

// GET request for login page
router.get('/login', async (req, res) => {
  res.render('loginpage');
})

// GET request for Journal Page
router.get('/', async (req, res) => {

  res.render('journalpage');
});

module.exports = router;
