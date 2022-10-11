function distanceFromHqInBlocks(pickupLocation) {
    //returns number of blocks from hq on 42nd st
    pickupLocation = pickupLocation - 42;
    // Math.abs(-5) returns 5
    return Math.abs(pickupLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    // Returns the number of feet from hq to the pickup location. 
    // Use your distanceFromHqInBlocks function to help return the correct value here.
    distanceFromHqInBlocks(pickupLocation);
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    // returns number of feet travelled from start to destination
    // 1 block = 264 feet
    let feetTravelled = Math.abs((destination - start) * 264);
    return feetTravelled;
}

function calculatesFarePrice(start, destination) {
    let totalFeetTraveled = distanceTravelledInFeet(start, destination);
    // return fare of trip given same distance travelled as last test
    // if totalFeetTraveled <= 400, fare = 0
    if (totalFeetTraveled <= 400) {
        return 0;
    // if totalFeetTraveled > 400 && < 2000, fare = .02 * (totalFeetTraveled - 400)
    } else if (totalFeetTraveled > 400 && totalFeetTraveled <= 2000) {
        return .02 * (totalFeetTraveled - 400);
    // if totalFeetTraveled > 2000 && < 2500, fare = 25
    } else if (totalFeetTraveled > 2000 && totalFeetTraveled < 2500) {
        return 25;
    // if totalFeetTraveled > 2500, return 'cannot travel that far'
    } else {
        return 'cannot travel that far';
    }
}
console.log(':)');
console.log(calculatesFarePrice(34, 18));