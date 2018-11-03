var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var DriverSchema = new mongoose.Schema({
    driverId: String,
    active: Boolean,
    requests: Array
})

DriverSchema.plugin(mongoosePaginate)
const Driver = mongoose.model('Driver', DriverSchema)

module.exports = Driver;
