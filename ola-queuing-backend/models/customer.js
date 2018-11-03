var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var CustomerSchema = new mongoose.Schema({
    customerId: String,
    date: Date,
})

CustomerSchema.plugin(mongoosePaginate)
const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer;
