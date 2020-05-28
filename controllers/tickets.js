const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

module.exports = {
    show,
    create
};



function show(req, res){
    Flight.findById(req.params.id, null, {sort: '-date'}, function(err, flight){
        res.render('tickets/new', {flight, title: "New Ticket"})
    })
};

function create(req,res){
    Ticket.create(req.body, function(err, ticket) {
        Flight.findById(req.params.id, function(err, flight) {
            flight.tickets.push(ticket)
            flight.save(function(err){
                res.redirect(`/flights`);
            })
        });
    });
}