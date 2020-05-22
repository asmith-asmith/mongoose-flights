const Flight = require('../models/flights');

module.exports = {
    index,
    create,
    new: newFlight
};

function index(req,res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {
            flights
        })
    })
}

function create(req,res){
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err) return res.render('flights/new')
        res.redirect('/flights')
    })
}

function newFlight(req, res){
    res.render('flights/new')
}


