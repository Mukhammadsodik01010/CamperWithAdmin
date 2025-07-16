const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ClientAuthSchema = new mongoose.Schema(
  {
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
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const saltRounds = 10;

ClientAuthSchema.pre("save", async  function(next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, saltRounds)
    next()
})

ClientAuthSchema.methods.comparePassword = function (plainPasword) {
    return bcrypt.compare(plainPasword, this.password)
}

module.exports = mongoose.model("ClientAuth", ClientAuthSchema);
