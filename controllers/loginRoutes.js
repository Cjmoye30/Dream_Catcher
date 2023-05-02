const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('loginpage')

});

module.exports = router;