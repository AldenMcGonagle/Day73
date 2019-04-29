// console.log("Hello World");

const express = require('express')
const app = express()
const port = 1201

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var gsjson = require('google-spreadsheet-to-json');

// gsjson({
//         spreadsheetId: '1ynOQ2h6FUxHNkxHB2Ca6qPeyHxQo8qjJkk7U5T6tKTU',
//         // other options...
//     })
//     .then(function(result) {
//         console.log(result.length);
//         console.log(result);
//     })
//     .catch(function(err) {
//         console.log(err.message);
//         console.log(err.stack);
//     });

app.get('/json', (req, res) => {
    gsjson({
        spreadsheetId: '1ynOQ2h6FUxHNkxHB2Ca6qPeyHxQo8qjJkk7U5T6tKTU',
        // other options...
    })
    .then(function(result) {
        console.log(result.length);
        console.log(result);
        res.send(result)
    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });
})