const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:id/tickets/new
router.get('/flights/:id/ticket/new', ticketsCtrl.show)
// POST /
router.post('/flights/:id/tickets', ticketsCtrl.create);

router.delete('/flights/:fid/tickets/:tid', ticketsCtrl.delete)

module.exports = router;