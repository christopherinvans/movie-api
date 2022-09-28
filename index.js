const bodyParser = require('body-parser');
const express = require('express');
    morgan = require('morgan');
    fs = require('fs');
    path = require('path');
    methodOverride = require('method-override');
    uuid = require('uuid');
    app = express();

    app.use(morgan('common'));
    app.use(express.static('public'));
    app.use(bodyParser.json());

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

let myFavorites = [];

app.get('/', (req, res) => {
    res.send('Abandon Hope All Ye Who Enter Here!'); 
    // UPDATE TO SERIOUS MESSAGE LATER
});

app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
});

// SHOW ALL MOVIES
app.get('/movies', (req, res) => {
    res.send('This will be a JSON object containing all movies in database');
});

// GET DATA ABOUT SINGLE MOVIE BY NAME
app.get('/movies/:name', (req, res) => {
    res.json(movies.find((name) =>
      { return movie.name === req.params.name }));
  });

// GET DATA ABOUT GENRE
app.get('/genres/:genre', (req, res) => {
    res.send('Successful Get request returning genre data')
  });

// GET DATA ABOUT DIRECTOR
app.get('/directors/:name', (req, res) => {
    res.send('JSON object with director data')
});

// REGISTER NEW USER
app.post('/users', (req, res) => {
    let newUser = req.body;
  
    if (!newUser.name) {
      const message = 'Missing name in request body';
      res.status(400).send(message);
    } else {
      newUser.id = uuid.v4();
      users.push(newUser);
      res.status(201).send(newUser);
    }
  });

// CHANGE USERNAME
app.put('/users/:name', (req, res) => {
    let user = users.find((user) => { return user.name === req.params.name });
  
    if (user) {
      user.name[req.params.name] = parseInt(req.params.grade);
      res.status(201).send('User name ' + req.params.name + ' was changed.');
    } else {
      res.status(404).send('User name ' + req.params.name + ' was not found.');
    }
  });

// ADD MOVIE TO FAVORITES
app.post('/movies/myfavorites', (req, res) => {
    let newFavorite = req.body;
  
    if (!newUser.name) {
      const message = 'Missing name in request body';
      res.status(400).send(message);
    } else {
      newUser.id = uuid.v4();
      users.push(newUser);
      res.status(201).send(newUser);
    }
  });

// REMOVE MOVIE FROM FAVORITES
app.delete('/movies/myfavorites:name', (req, res) => {
    let movie = movies.find((movie) => { return movie.id === req.params.id });
  
    if (movie) {
      movies = movies.filter((obj) => { return obj.id !== req.params.id });
      res.status(201).send('Movie ' + req.params.id + ' was deleted from favorites.');
    }
  });

// DEREGISTER
app.delete('/users/:id', (req, res) => {
    let user = users.find((user) => { return user.id === req.params.id });
  
    if (user) {
      users = users.filter((obj) => { return obj.id !== req.params.id });
      res.status(201).send('User ' + req.params.id + ' was deleted.');
    }
  });

// ERROR HANDLING
app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  app.use(bodyParser.json());
  app.use(methodOverride());
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Ah, nuts!');
  });

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});