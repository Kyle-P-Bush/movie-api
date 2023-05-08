const express = require('express');
const app = express();
const movies = require('./routes/movies');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/movies', movies);
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

