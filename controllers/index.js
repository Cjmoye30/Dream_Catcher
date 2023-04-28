const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const journalRoutes = require('./journalRoutes');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/journal', journalRoutes);

module.exports = router;
