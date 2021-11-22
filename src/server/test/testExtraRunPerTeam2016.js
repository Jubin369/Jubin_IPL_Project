const iplData = require(`${__dirname}/../index`)
const matches = iplData.matchConvertedToJSON;
const deliveries = iplData.delivery;

const extraRuns = require('../ipl.js')

try {
    
    let  extraRunPerTeam2016= extraRuns.extraRunPerTeamIn2016(matches,deliveries);
    console.log(extraRunPerTeam2016);
    
    module.exports={extraRunPerTeam2016};
    
} catch (error) {
    console.log(error.message);
}


