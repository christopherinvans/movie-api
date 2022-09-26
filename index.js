const express = require('express'),
    app = express(),
    morgan = require('morgan'),
    fs = require('fs'), 
    path = require('path');
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

    app.use(morgan('common'));
    app.use(express.static('public'));

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Ah, nuts!');
      });
    
    app.use(bodyParser.urlencoded({
        extended: true
      }));
      
      app.use(bodyParser.json());
      app.use(methodOverride());
      
      app.use((err, req, res, next) => {
      });

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