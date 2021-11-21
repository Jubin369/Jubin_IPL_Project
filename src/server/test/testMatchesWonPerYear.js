const iplData = require(`${__dirname}/../index`)
const matches = iplData.matchConvertedToJSON;
const matchesWon = require('../ipl.js')

try {
    let matchesWonPerSeason = matchesWon.matchesWonPerYear(matches);
    console.log(matchesWonPerSeason);
    module.exports = {matchesWonPerSeason};
    
} catch (error) {
    console.log(error.message);
}

