const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
const journalRoutes = require('./journalRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes)
router.use('/journal', journalRoutes);

module.exports = router;
