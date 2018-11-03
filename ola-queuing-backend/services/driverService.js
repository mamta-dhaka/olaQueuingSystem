var Driver = require('../models/driver')
_this = this
exports.getDrivers = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var drivers = await Driver.paginate(query, options);
        return drivers;

    } catch (e) {
        throw Error('Error while Paginating Driver')
    }
}

exports.createDriver = async function(driver){
    var newDriver = new Driver({
        driverId: driver.driverId,
        date: new Date(),
        active: driver.active,
        requests: driver.requests
    });
    try{
        var savedDriver = await newDriver.save();

        return savedDriver;
    }catch(e){
        throw Error("Error while Creating Driver");
    }
}

exports.updateDriver = async function(driver){
    var id = driver.id

    try{
        var oldDriver = await Driver.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Driver")
    }
    if(!oldDriver){
        return false;
    }

    console.log('?>>>>>>>', oldDriver);
    oldDriver.active = driver.active;
    oldDriver.request = driver.request;


    console.log(oldDriver);

    try{
        var savedDriver = await oldDriver.save();
        return savedDriver;
    }catch(e){
        throw Error("And Error occured while updating the Driver");
    }
}

exports.deleteDriver = async function(id){
    try{
        var deleted = await Driver.remove({_id: id});
        if(deleted.result.n === 0){
            throw Error("Driver Could not be deleted");
        }
        return deleted;
    }catch(e){
        throw Error("Error Occured while Deleting the Driver");
    }
}
