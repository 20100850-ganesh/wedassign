import Movie from '../models/movie';

const PAGE_SIZE = 10;

const movieController = {
    getMovies: async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const skip = (page - 1) * PAGE_SIZE;

            const totalMovies = await Movie.countDocuments();
            const totalPages = Math.ceil(totalMovies / PAGE_SIZE);

            const movies = await Movie.find()
                .skip(skip)
                .limit(PAGE_SIZE);

            res.json({ movies, totalPages });
        } catch (error) {
            next(error);
        }
    },
};

export default movieController;
