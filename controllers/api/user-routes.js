const router = require('express').Router();
const { User } = require('../../models');

// post request for login:
router.post('/login', async (req, res) => {
    
    try {

        // res.status(200).json(req.body);
        console.log(req.body);
        res.status(200).json("hello!")

    } catch(error) {
        console.log("Something went wrong!")
        res.status(500).json(err)
    }
});

module.exports = router;