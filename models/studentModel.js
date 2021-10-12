const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  surname: String,
  address: { type: mongoose.Types.ObjectId, ref: "address" },
});

const studentModel = mongoose.model("Students", studentSchema);

module.exports = studentModel;
