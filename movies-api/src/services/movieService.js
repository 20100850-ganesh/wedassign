import Movie from '../models/movie';

const movieService = {
    getAllMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            throw new Error('Error retrieving movies');
        }
    },
};

export default movieService;
