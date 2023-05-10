const router = require('express').Router();
const { Dreams } = require('../models') 

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

// GET request for Journal Page - get all dreams for the signed in user only
router.get('/journal', async (req, res) => {
  
  try {
    const dreamData = await Dreams.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    const dreamArr = dreamData.map((dreamData) => dreamData.get({ plain: true }));
    console.log(dreamArr)

    res.render('journalpage', { dreamArr });
  } catch (err) {
    res.status(500).json(err)
  }
});

// 
router.get('/missionpage', async (req, res) => {
  res.render('missionpage');
});

module.exports = router;
