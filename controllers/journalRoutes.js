const express = require('express');
const { interpretDream } = require('../public/js/openAI'); // Import the correct function name

const router = express.Router();

router.get('/', async (req, res) => {
<<<<<<< HEAD
    //figure out the current user (get this from the req.session, to do this we need to add user ID to req.session login (in example code that Jack pushed))
    //add journal entry model, get all the journal entries for the current user (uses journal.js model)
    //pass that data to the journal page in res.render, this will all be a dependency on login route and journal model
    res.render('journalpage');
});

module.exports = router;

//
=======
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
>>>>>>> 1344b0d8c169722ff18815f6c6049be3cbb37f92
