
// convert deliveries.csv file to deliveries.js file using [fs] module.
const fs = require('fs');
deliveriesCSV = fs.readFileSync(`${__dirname}/../data/deliveries.csv`, 'utf-8');

let lines = deliveriesCSV.split("\n");

const headers = lines[0].split(',');

let delivery = [];
for(let lineIndex = 1; lineIndex<lines.length; lineIndex++){
    const obj = {};
    const currentline = lines[lineIndex].split(',');
    
    for (let headerIndex = 0; headerIndex < headers.length; headerIndex++) {
        if (currentline[headerIndex] !== '' && currentline[headerIndex] != '\r' && typeof (currentline[headerIndex]) != 'undefined'){
            obj[headers[headerIndex]] = currentline[headerIndex];
        }
    }

    if (typeof (currentline[1]) != 'undefined'){
        delivery.push(obj);
    }   
}
//console.log(delivery,delivery.length);




// This part is used for  matches
matchCsv = fs.readFileSync(`${__dirname}/../data/matches.csv`, 'utf-8');
let firstLines = matchCsv.split("\n");

const matchHeaders = firstLines[0].split(',');
let matchConvertedToJSON = [];
for(let index = 1; index < firstLines.length; index++){
    const obj = {};
    const currentline = firstLines[index].split(',');

    for (let headerIndex = 0; headerIndex < matchHeaders.length; headerIndex++) {
        if (currentline[headerIndex] !== '' && currentline[headerIndex] != '\r'){
            obj[matchHeaders[headerIndex]] = currentline[headerIndex];
        }
    }
    if (typeof (currentline[1]) != 'undefined'){
        matchConvertedToJSON.push(obj);
    }
}
//console.log(matchConvertedToJSON,matchConvertedToJSON.length);

module.exports= {delivery,matchConvertedToJSON}



