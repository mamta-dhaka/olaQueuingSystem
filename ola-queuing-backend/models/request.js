var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var RequestSchema = new mongoose.Schema({
    reqNu: String,
    customer: String,
    driver: String,
    date: Date,
    status: String,
    startDate: Date,
    endDate: Date
})

RequestSchema.plugin(mongoosePaginate)
const Request = mongoose.model('Request', RequestSchema)

module.exports = Request;
