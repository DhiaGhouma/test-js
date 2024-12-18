var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Hotel=new Schema(
    {
        nom: String,
        fabricationDate: Date,
        nbrRooms: {
            type: Number,
            default: 10
        }
    }
)
module.exports = mongoose.model('hotels', Hotel)