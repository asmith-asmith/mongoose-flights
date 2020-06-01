const Flight = require('../models/flights');
const Ticket = require('../models/tickets');


module.exports = {
    index,
    create,
    new: newFlight,
    show,
    delete: deleteFlight
};

function index(req,res){
    Flight.find({}, null, {sort: '-date'}, function(err, flights){
        res.render('flights/index', {flights, title: "All Flights"})
    })
};

function newFlight(req, res){
    const newFlight = new Flight();
    res.render('flights/new', {title: "New Flight"})
};


function create(req, res){
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err) return res.render('flights/new')
        res.redirect('/flights')
    });
};

function show(req, res){
    Flight.findById(req.params.id, null, {sort: '-date'}, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets){
            console.log(tickets)
            res.render('flights/show',{
                flight, tickets, title: "Flight"})
        });
    });
};

function deleteFlight(req, res){
    console.log("before mongoose method")
    Flight.deleteOne({_id: req.params.id}, function(err, flight){
        if (err) return res.status(500).send(err);
        console.log("Here in deleteFlight - deleteOne")
        res.redirect('/flights');
    });
};