import express from 'express';
import axios from 'axios';
import Movie from '../models/movie.js';

const router = express.Router();
router.get('/', async (req, res, next) => {
    try {
        const apiKey = process.env.TMDB_API_KEY;
        const page = req.query.page || 1;

        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`;
        const response = await axios.get(url);

        const movies = response.data.results;

        res.json(movies);
    } catch (error) {
        next(error);
    }
});

export default router;
