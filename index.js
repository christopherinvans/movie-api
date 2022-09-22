const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('common'));

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
    // UPDATE TO SERIOUS MESSAGE LATER
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