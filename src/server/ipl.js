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

// -------------------------------matchesWonPerTeamPerYear-----------------------

function matchesWonPerTeamPerYear(matches){
    let matchesWonPerSeason = {};
  
    let allSeasons = Object.keys(matches).map((key) =>  (matches[key].season));       
    let seasons = allSeasons.filter((item, index,ar) => ar.indexOf(item) === index);  
    let allWonTeam = Object.keys(matches).map((key) => matches[key].winner );           
    allWonTeam = Object.keys(matches).map((key) => matches[key].team2 );               
    let wonTeam = allWonTeam.filter((item,index,arr) => arr.indexOf(item) === index);         
    Object.keys(seasons).forEach((yearId) => {                                         
        let temp = {};
        Object.keys(wonTeam).forEach((teamId) => temp[wonTeam[teamId]]=0);           
        matchesWonPerSeason[seasons[yearId]] = temp;
    })
    Object.keys(matches).forEach((key) => {                                       // Here i am checking with if condition that if winner of matches is not undefined then i have to increase the count by 1 of object matchesWonPerSeason
        if (typeof matches[key].winner != 'undefined'){
            matchesWonPerSeason[matches[key].season][matches[key].winner] += 1;
        }
    })
    return matchesWonPerSeason;

}


module.exports = {matchesWonPerYear,matchesWonPerTeamPerYear};
