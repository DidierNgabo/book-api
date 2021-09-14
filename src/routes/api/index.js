import express from 'express';
import bookRoutes from './books.route';
import userRoutes from './user.route';

const router = express.Router();

router.use('/books', bookRoutes);
router.use('/users', userRoutes);
export default router;
