import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const { TMDB_API_KEY } = process.env;

// GET /series route
router.get('/', async (req, res) => {
    try {
        const { page } = req.query;

        const { data } = await axios.get(
            `https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
        );

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch TV series data' });
    }
});

export default router;
