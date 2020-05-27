const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        default: 'DEN',
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new Schema({
	airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
	airport: {
        type: String,
        default: 'DEN',
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
	flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    destinations: [destinationSchema],
	departs: {
        type: Date,
        default: function () {
            const defaultDate = new Date();
            defaultDate.setFullYear(defaultDate.getFullYear() + 1);
            return defaultDate;
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);