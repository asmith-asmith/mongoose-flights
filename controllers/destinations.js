const Flight = require('../models/flights');

module.exports = {
    create,
    delete: deleteOne
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
};

function deleteOne(req, res){
  console.log(req.params.fid,req.params.did,)
  Flight.findById(req.params.fid, function(err, flight){
    flight.destinations.id(req.params.did).remove();
    flight.save(function(err){
      res.redirect(`/flights/${req.params.fid}`)
    });
  });
};