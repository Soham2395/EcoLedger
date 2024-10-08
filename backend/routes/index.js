import express from 'express';
import userRoutes from './userRoutes.js';
import diffUser from './differentUserRoutes.js';
import energyRoutes from './energyRoutes.js';
import capitalRoutes from './capitalRoutes.js';

const router=express.Router();

router.use('/api/user', userRoutes);
router.use('/api/diffUser', diffUser);
router.use('/api/energy', energyRoutes);
router.use('/api/capital', capitalRoutes)

export default router;