const express = require('express');
const { interpretDream } = require('../public/js/openAI'); // Import the correct function name
const { User, Dreams } = require('../models')

const router = express.Router();

router.get('/', async (req, res) => {
    //figure out the current user (get this from the req.session, to do this we need to add user ID to req.session login (in example code that Jack pushed))
    //add journal entry model, get all the journal entries for the current user (uses journal.js model)
    //pass that data to the journal page in res.render, this will all be a dependency on login route and journal model
    res.render('journalpage');
});

module.exports = router;

//

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

// Add a dream to the DB
router.post('/api/submit-dream', async (req, res) => {

    try {
        const newDream = await Dreams.create({
            subject: req.body.subject,
            description: req.body.description,
            interpretation: req.body.interpretation,
            user_id: req.session.user_id
        })

        res.json({
            success: true,
            message: 'New dream created!'
        });

    } catch (err) {
        res.status(500).json(err)
    }
});

// Delete a dream from the table
router.delete('/api/delete-dream/:id', async (req, res) => {
    try {
        const dreamData = await Dreams.destroy({
          where: {
            id: req.params.id,
          },
        });
    
        if (!dreamData) {
          res.status(404).json({ message: 'No dream found with this id!' });
          return;
        }
    
        res.status(200).json(dreamData);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;
