const router = require('express').Router();

// importing our "User" model so that we have access to the data we are wanting to render on the homeRoute
// We then update the "View" - homepage.handlebars - to accept data using the placeholders

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

module.exports = router;
