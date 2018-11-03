var Request = require('../models/request')
_this = this
exports.getRequests = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var requests = await Request.paginate(query, options);
        return requests;

    } catch (e) {
        throw Error('Error while Paginating Todos')
    }
}

exports.createRequest = async function(request){
    console.log('>>>>>>>', request);
    var newRequest = new Request({
        reqNu: request.reqNu,
        customer: request.customer,
        driver: request.driver,
        date: new Date(),
        status: request.status
    });
    try{
        var savedRequest = await newRequest.save();

        return savedRequest;
    }catch(e){
        throw Error("Error while Creating Todo");
    }
}

exports.updateRequest = async function(request){
    var id = request.id

    try{
        var oldRequest = await Request.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }
    if(!oldRequest){
        return false;
    }

    console.log(oldRequest);
    oldRequest.driver = request.driver;
    // oldRequest.description = oldRequest.description;
    oldRequest.status = request.status;


    console.log(oldRequest);

    try{
        var savedRequest = await oldRequest.save();
        return savedRequest;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}

exports.deleteRequest = async function(id){
    try{
        var deleted = await Request.remove({_id: id});
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted");
        }
        return deleted;
    }catch(e){
        throw Error("Error Occured while Deleting the Todo");
    }
}
