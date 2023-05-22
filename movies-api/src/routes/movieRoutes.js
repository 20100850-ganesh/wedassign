import express from 'express';
import axios from 'axios';
import Movie from '../models/movie.js';


const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const apiKey = process.env.TMDB_API_KEY;
        const page = req.query.page || 1;

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
        const response = await axios.get(url);

        const movies = response.data.results;

        // Store the fetched movies in the MongoDB collection
        for (const movie of movies) {
            const existingMovie = await Movie.findOne({ id: movie.id });

            if (!existingMovie) {
                const newMovie = new Movie({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    title: movie.title,
                    release_date: movie.release_date,
                    vote_average: movie.vote_average,
                });

                await newMovie.save();
            }
        }

        // Fetch movies from MongoDB collection
        const dbmovies = await Movie.find().skip((page - 1) * 20).limit(20);

        res.json(movies);
    } catch (error) {
        next(error);
    }
});


export default router;
