const express = require('express');
const router = express.Router();
const movies = require('../data/movies.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.get('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.json(movie);
});

router.post('/', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre
    };
    movies.push(movie);
    res.json(movie);
});

router.put('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    movie.title = req.body.title;
    movie.year = req.body.year;
    movie.genre = req.body.genre;

    res.json(movie);
});

router.delete('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    const index = movies.indexOf(movie);
    movies.splice(index, 1);

    res.json(movie);
});

module.exports = router;

