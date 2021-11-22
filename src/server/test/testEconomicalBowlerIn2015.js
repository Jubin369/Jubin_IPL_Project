const iplData = require(`${__dirname}/../index`)
const matches = iplData.matchConvertedToJSON;
const matchesWon = require('../ipl.js')
const deliveries = iplData.delivery;

try {
    let  topEconomicalBowler = matchesWon.topEconomicalBowlerIn2015(matches,deliveries);
    module.exports = {topEconomicalBowler};
    console.log(topEconomicalBowler);
  
} catch (error) {
    console.log(error.message)
}