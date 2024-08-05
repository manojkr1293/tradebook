const { default: mongoose } = require("mongoose");

const authModel = new mongoose.Schema({
  name:String,
  email:String,
  password:String
});

export const authSchema = mongoose.models.resturents || mongoose.model('resturents', authModel);