import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['energyProvider', 'capitalProvider', 'generalUser'],
    default: 'generalUser'
  },
  companyName: {
    type: String,
    required: function() { return this.role === 'energyProvider' || this.role === 'capitalProvider'; }
  }
});

 const Users= mongoose.model('User', userSchema);
export default Users;