const express = require('express');
const app = express();

let topMovies = [
    {
        title: 'Forgetting Sarah Marshall',
        year: '2008'
    },
    {
        title: 'What We Do in the Shadows',
        year: '2014'
    },
    {
        title: 'Jurassic Park',
        year: '1993'
    }
];

app.get('/', (req, res) => {
    res.send('Abandon Hope All Ye Who Enter Here!');
});

app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
});
  
app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});