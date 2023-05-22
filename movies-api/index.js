import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../movies-api/src/config/db.js';
import movieRoutes from './src/routes/movieRoutes.js';
import errorHandler from './src/utils/errorHandler.js';
import cors from 'cors';
import trendingRoutes from './src/routes/trendingRoutes.js';


dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors({
    origin: '*',
}));


// Routes
app.use('/movies', movieRoutes);
app.use('/trending', trendingRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
