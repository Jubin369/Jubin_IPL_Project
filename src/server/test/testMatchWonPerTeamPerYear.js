
const iplData = require(`${__dirname}/../index`)
const matches = iplData.matchConvertedToJSON;
const matchesWon = require('../ipl.js')
let matchSize =Object.keys(matches).length;


try {
    
    let  matchesWonPerTeamPerSeason= matchesWon.matchesWonPerTeamPerYear(matches);
    console.log(matchesWonPerTeamPerSeason);
    
    module.exports={matchesWonPerTeamPerSeason};
    
} catch (error) {
    console.log(error.message);
}
