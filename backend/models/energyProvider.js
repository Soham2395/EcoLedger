import mongoose from 'mongoose';

const energySchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    enum: ['kWh', 'MWh'],
    default: 'kWh'
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  amountAvailable: { type: Number, default: 0 },
  amountSold: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ['available', 'sold'],
    default: 'available'
  }
});

const energyProvider = mongoose.model('EnergyListing', energySchema);
export default energyProvider;