var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destSchema = new Schema({
    destAirport: {
        type: String,
    },
    arrives: {
        type: Date,
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ["United", "Southwest", "Delta"]
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        required: true,
        default: function () {
            var redate = new Date();
            redate.setFullYear(redate.getFullYear()+1);
            return redate;
        }
    },
    depAirport: {
        type: String,
        required: true,
        enum: ["Paris", "Los Angeles", "Anchorage", "Cuba", "London", "Sydney"]
    },
    destination: [destSchema],
    });


module.exports = mongoose.model('Flight', flightSchema);