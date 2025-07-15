const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  reminder:String,
},
{
  timestamps:true,
} 
);

const saltRounds = 10;

RegisterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

RegisterSchema.methods.comparePassword = function(plainPasword){
  return bcrypt.compare(plainPasword, this.password);
};



module.exports = mongoose.model("UserProduct", RegisterSchema);
