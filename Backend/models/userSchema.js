const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    reuired: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not Valid Email Address");
      }
    },
  },

  mobile: {
    type: String,
    required: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  token: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  cart: Array,
});

// this method always use before your model 

userSchema.pre("save", async function (next) {

    //isModified ka use isliye h jab hum password ko change karna chaiye tab hi ho wrna ni

  if (this.isModified("password")) {

    //rounds always take maximum bcoz then nobody will decrypt your password

    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  // next() agle kaam ke liye hota h ki ye hone ke baad aage ka kam ho jaye

  next();

});

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
