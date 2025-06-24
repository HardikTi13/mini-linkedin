const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  open: {
    type: String,
    enum: ['Open', 'Closed'],
    default: 'Open' 
  },
  requirement: {
    type: String,
    trim: true
  },
  offering: {
    type: String,
    trim: true
  },
  eligibility: {
    type: String,
    trim: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Proposal', proposalSchema);
