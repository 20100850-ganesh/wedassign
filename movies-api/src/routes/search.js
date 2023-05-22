import express from 'express';
import axios from 'axios';

const router = express.Router();

router.all('/', async (req, res) => {
    // Handle both GET and POST requests here
    if (req.method === 'GET' || req.method === 'POST') {
        try {
            const { query, type, page } = req.query || req.body; // Adjust to handle query parameters from both GET and POST requests
            console.log('Received search request:', { query, type, page });

            const url = `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

            const { data } = await axios.get(url);

            res.json(data);
        } catch (error) {
            console.error('An error occurred while processing the search request:', error);
            res.status(500).json({ message: 'An error occurred while processing the search request.' });
        }
    } else {
        res.status(405).send('Method Not Allowed'); // Return 405 status code for unsupported methods
    }
});


export default router;
