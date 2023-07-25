const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    user_file:String
  });
  module.exports=mongoose.model('users',userSchema);