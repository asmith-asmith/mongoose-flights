var express = require('express');
var router = express.Router();

const destCtrl = require('../controllers/destinations');

// POST /flights/:id/destinations
router.post('/flights/:id/destinations', destCtrl.create);
// DELETE /destinations/:id
router.delete('/flights/:fid/destinations/:did', destCtrl.delete)



module.exports = router;