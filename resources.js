const express     = require('express');
const app         = express();

const router      = express.Router();

router.use('/wiki', require('./controllers/wiki_controllers'));
router.use('/', require('./controllers/wiki_controllers'));
router.use('/new', require('./controllers/wiki_controllers'));

module.exports = router;
