const router = require('express').Router();

router.get('/', async (req, res) => {
    //figure out the current user (get this from the req.session, to do this we need to add user ID to req.session login (in example code that Jack pushed))
    //add journal entry model, get all the journal entries for the current user (uses journal.js model)
    //pass that data to the journal page in res.render, this will all be a dependency on login route and journal model
    res.render('journalpage');
});

module.exports = router;

//