// -------------converting javascript file to json-------------------------
const fs=require('fs')

const matchWon = require(`${__dirname}/test/testMatchesWonPerYear`)
const matchesWonPerSeason = matchWon.matchesWonPerSeason

const matchesWonPerTeamsPerYear = require(`${__dirname}/test/testMatchWonPerTeamPerYear`)
const matchWonPerTeamPerYear = matchesWonPerTeamsPerYear.matchesWonPerTeamPerSeason

const extrasRunPerTeam =  require(`${__dirname}/test/testExtraRunPerTeam2016`)
const extrasRunPerTeamIn2016 =extrasRunPerTeam.extraRunPerTeam2016

function javascriptToJson(fileName,data){
    fs.writeFile(`./../public/output/${fileName}.json`,JSON.stringify(data),function(err){
        if (err){
        console.log('error')
        }else{
            console.log('file successfully created');
        }
    })
}
try {
    javascriptToJson('matchesWonPerYear',matchesWonPerSeason)
    
} catch (error) {
    console.log(error.message);
}

try {
    javascriptToJson('matchesWonPerTeamPerYear',matchWonPerTeamPerYear)
    
} catch (error) {
    console.log(error.message);
}

try {
    javascriptToJson('extraRunPerTeamIn2016',extrasRunPerTeamIn2016)
    
} catch (error) {
    console.log(error.message);
}
