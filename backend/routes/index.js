import express from 'express';
import userRoutes from './userRoutes.js';
import diffUser from './differentUserRoutes.js';

const router=express.Router();

router.use('/api/user', userRoutes);
router.use('/api/diffUser', diffUser);

export default router;