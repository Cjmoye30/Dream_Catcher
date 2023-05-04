const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// post request for login - taking the req.body after the user clicks the login button and making sure those credentails are in our system. If everything is true, then the user is logged in and we can use their req.session.id across the rest of the website
router.post('/login', async (req, res) => {

    try {

        // find an email in our db that matches the req.body email
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        console.log(userData);

        if (userData) {
            //check password
            const validPassword = await bcrypt.compare(req.body.password, userData.password);
            if (validPassword) {

                req.session.save(() => {
                    req.session.user_id = userData.id;
                    req.session.name = userData.name;
                    req.session.logged_in = true;

                    res.json({
                        success: true,
                        user: userData,
                        message: 'You are now logged in!'
                    });
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: 'Wrong password :('
                });
            }
        } else {
            return res.status(404).json({
                success: false,
                message: 'User not found :('
            });
        }

    } catch (e) {
        console.log(e)
        res.status(500).json(e);
    }

});

// logout route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// POST route for signup page to create a new user in the DB
router.post('/signup', async (req, res) => {
    const signupData = req.body;
    console.log(signupData);

    try {
    // Create the user based on the request body sent over
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    // sign-in the user 
    req.session.save(() => {
        req.session.user_id = newUser.id,
        req.session.name = newUser.name,
        req.session.logged_in = true;

        res.json({
            success: true,
            user: newUser,
            message: 'You are now logged in!'
        });
    });


    } catch (err) {
        res.status(500).json(err)
    }

});

module.exports = router;