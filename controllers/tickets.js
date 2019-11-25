var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket
 
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, tickets) {
        res.render('tickets/new', {title: 'Add Ticket', tickets});
    });
} ;


function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, tickets) {  
      let newTicket = new Ticket(req.body);
    //   newTicket.save(function(err, result) {
          res.redirect(`/flights/${req.params.id}`);
      })
    };