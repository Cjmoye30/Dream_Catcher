const express = require('express');
const { interpretDream } = require('../public/js/openAI'); // Import the correct function name
const { User, Dreams } = require('../models')

const router = express.Router();

router.post('/api/interpret-dream', async (req, res) => {
    const { description } = req.body;
    console.log('Description:', description);

    try {
        const interpretation = await interpretDream(description); // Use the correct function name
        console.log('Interpretation:', interpretation);
        res.json({ interpretation });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/api/submit-dream', async (req, res) => {

    try {


        const newDream = await Dreams.create({
            subject: req.body.subject,
            description: req.body.description,
            interpretation: req.body.interpretation,
            user_id: req.session.user_id
        })

        console.log(newDream);

        res.json({
            success: true,
            message: 'New dream created!'
        });

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;