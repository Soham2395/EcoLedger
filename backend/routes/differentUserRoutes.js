import express from 'express';
const router = express.Router();
import auth from '../middleware/authMiddleware.js';

// Route for Energy Providers
router.post('/energy-data', auth(['energyProvider']), (req, res) => {
  res.json({ message: 'Energy data submitted successfully' });
});

// Route for Capital Providers
router.get('/e-nft-bonds', auth(['capitalProvider']), (req, res) => {
  // Logic to fetch e-NFT bond information
  res.json({ message: 'e-NFT bond data retrieved' });
});

// Route for General Users
router.get('/dashboard', auth(), (req, res) => {
  // Logic to fetch dashboard data for all user types
  res.json({ message: 'Dashboard data retrieved' });
});

export default router;