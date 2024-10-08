import express from 'express';
import EnergyListing from '../models/energyProvider.js';
import SoldEnergy from '../models/capitalOwner.js'
// import  authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/sell', async (req, res) => {
  const { listingId, buyerId, amountSold } = req.body;
//   console.log(listingId, buyerId, amountSold);
  

  try {
    const listing = await EnergyListing.findById(listingId);
    console.log(listing);
    
    if (!listing) return res.status(404).json({ status: 'error', message: 'Listing not found' });

    if (listing.amountAvailable < amountSold) {
      return res.status(400).json({ status: 'error', message: 'Not enough energy available' });
    }

    listing.amountAvailable -= amountSold;
    listing.amountSold += amountSold;
    await listing.save();

    const newSale = new SoldEnergy({ listingId, buyerId, amountSold });
    await newSale.save();

    res.json({ status: 'success', listingId, amountSold });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to process sale' });
  }
});
export default router;