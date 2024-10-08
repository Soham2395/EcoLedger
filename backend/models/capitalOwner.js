import mongoose from 'mongoose';
const soldEnergySchema = new mongoose.Schema({
  listingId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'EnergyListing' },
  buyerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Buyer' },
  amountSold: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const capitalOwner = mongoose.model('SoldEnergy', soldEnergySchema);

export default capitalOwner;