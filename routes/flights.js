var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET /flights - index
router.get('/', flightsCtrl.index);
// GET /flights/new - new
router.get('/new', flightsCtrl.new)
// POST /flights - create
router.post('/', flightsCtrl.create)
// GET /flights/:id
router.get('/:id', flightsCtrl.show);
// DELETE flights/:id
router.delete('/:id', flightsCtrl.delete)

module.exports = router;