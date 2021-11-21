// -------------------------------matches won per year--------------------------------------------
const fs = require('fs')
function matchesWonPerYear(matches){
    let matchesPerSeasons = {};
   
    Object.keys(matches).forEach( (key) => {
        if (matches[key].season in matchesPerSeasons){
            matchesPerSeasons[matches[key].season] += 1
        }else{
            matchesPerSeasons[matches[key].season] = 1
        }
    })
    return matchesPerSeasons;
}



module.exports = {matchesWonPerYear};
