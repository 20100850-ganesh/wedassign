import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    poster_path: String,
    title: String,
    name: String,
    release_date: Date,
    first_air_date: Date,
    vote_average: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
