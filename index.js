
// const headquarters = 42;
// function distanceFromHqInBlocks(primary) {
//     return Math.abs(headquarters - primary);
// }
// console.log(distanceFromHqInBlocks(43));
// console.log(distanceFromHqInBlocks(50));
// console.log(distanceFromHqInBlocks(34));


// function distanceFromHqInFeet(feet) {
//     distanceFromHqInBlocks(primary);
//     return primary * block
//}



// const 264;
// function distanceTravelledInFeet(street) {}




// function calculatesFarePrice(start, destination) {}


// const hq = 42;


// function distanceFromHqInFeet(street) {
//     let blocks = Math.abs(street - hq);
//     let feet = blocks * 264
//     return 'You are travelling ${feet} feet.'


// function distanceTravelledInFeet(street, dest) {
//     let feet = 264 * Math.abs(street - dest)
//     return 'You are travelling ${feet} feet.'
// }

// function calculatesFarePrice(dest) {
//     let dist = distanceTravelledInFeet(street, dest)
//     if (dist < 400) {
//         return "This ride is free."
//     } else if (dist - 400 && dist < 2000) {
//         fare = (dist - 400) * 0.2
//         return fare
//     } else if (dist > 2000 && dist < 2500) {
//         return "This ride is $25."
//     } else {
//         return "cannot travel that far"
//     }
// }


///// caner's code//

function distanceFromHqInBlocks(street) {
    return Math.abs(42- street);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) *264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
    const feetTravel = distanceTravelledInFeet(start, destination);
    if (feetTravel <= 400) {
        return 0;
    } else if (feetTravel > 400 && feetTravel <= 2000) {
        return (feetTravel - 40) * 0.02;
    } else if (feetTravel > 2000 && feetTravel <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}