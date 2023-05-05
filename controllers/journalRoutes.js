const express = require('express');
const { interpretDream } = require('../public/js/openAI'); // Import the correct function name

const router = express.Router();

router.get('/', async (req, res) => {
    res.render('journalpage');
});

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

module.exports = router;