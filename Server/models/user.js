const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
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
  type: {
    type: String,
    enum: ["User", "Freelancer", "admin"],
    default: "User"
  }
});

module.exports = mongoose.model("User", userSchema);
