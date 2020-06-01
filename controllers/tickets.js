const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

module.exports = {
    show,
    create,
    delete: deleteOne
};



function show(req, res){
    Flight.findById(req.params.id, null, {sort: '-date'}, function(err, flight){
        res.render('tickets/new', {flight, title: "New Ticket"})
    })
};

function create(req,res){
    const ticket = new Ticket(req.body);
    ticket.flight = req.params.id;
    ticket.save(function(err){
        res.redirect(`/flights/${req.params.id}`);
    })
};

function deleteOne(req, res){
    Ticket.deleteOne({_id: req.params.tid}, function(err,flight){
        if (err) return res.status(500).send(err);
        res.redirect(`/flights/${req.params.fid}`);
    })
}