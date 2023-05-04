const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');

// delete out
const journalRoutes = require('./journalRoutes');

router.use('/api', apiRoutes)
router.use('/', homeRoutes);

// delete out
// router.use('/journal', journalRoutes);

module.exports = router;
