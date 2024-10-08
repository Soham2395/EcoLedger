// src/routes/energyRoutes.js

import express from 'express';
import Energy from '../models/energyProvider.js';
import  authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// List new energy production
router.post('/', authMiddleware(['energyProvider']), async (req, res) => {
  try {
    const { amount, unit, price, location } = req.body;
    const energy = new Energy({
      provider: req.userData.userId,
      amount,
      unit,
      price,
      location,
      amountAvailable:amount
    });
    await energy.save();
    res.status(201).json(energy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all energy listings
router.get('/', async (req, res) => {
  try {
    const energyListings = await Energy.find().populate('provider', 'username companyName');
    res.json(energyListings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get energy listings for a specific provider
router.get('/provider', authMiddleware(['energyProvider']), async (req, res) => {
  try {
    const energyListings = await Energy.find({ provider: req.userData.userId });
    res.json(energyListings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update energy listing
router.put('/:id', authMiddleware(['energyProvider']), async (req, res) => {
  try {
    const { id } = req.params;
    const { price, status } = req.body;
    const energy = await Energy.findOneAndUpdate(
      { _id: id, provider: req.userData.userId },
      { price, status },
      { new: true }
    );
    if (!energy) {
      return res.status(404).json({ message: 'Energy listing not found or you are not authorized to update it' });
    }
    res.json(energy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;