import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Search request received:', req.query);
    res.send('Search request received successfully!');
});

export default router;
