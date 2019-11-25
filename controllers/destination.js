var Flight = require("../models/flight");

module.exports = {
  create
};

function create(req, res) {
  console.log(req.body);
  Flight.findById(req.params.id, function(err, flight) {
    console.log(flight);
    flight.destination.push(req.body);
    console.log(flight.destination);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}