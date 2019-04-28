/*
 |--------------------------------------
 | User Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: { type: String, required: true },
  roles: { type: String, required: true },
  hashedPAssword: { type: String, required: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

module.exports = mongoose.model('Users', userSchema);
