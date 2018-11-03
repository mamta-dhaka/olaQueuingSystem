var Customer = require('../models/customer')
_this = this
exports.getCustomers = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var customers = await Customer.paginate(query, options);
        return customers;

    } catch (e) {
        throw Error('Error while Paginating driver')
    }
}

exports.createCustomers = async function(customer){
    var newCustomer = new Customer({
        customerId: customer.customerId,
        date: new Date()
    });
    try{
        var savedCustomer = await newCustomer.save();

        return savedCustomer;
    }catch(e){
        throw Error("Error while Creating customer");
    }
}

exports.deleteCustomer = async function(id){
    try{
        var deleted = await Customer.remove({_id: id});
        if(deleted.result.n === 0){
            throw Error("customer Could not be deleted");
        }
        return deleted;
    }catch(e){
        throw Error("Error Occured while Deleting the customer");
    }
}
