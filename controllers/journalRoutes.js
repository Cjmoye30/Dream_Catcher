const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('journalpage');
});

module.exports = router;