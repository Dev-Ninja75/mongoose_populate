const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  streetNumber: String,
  adress: { type: mongoose.Types.ObjectId, ref: "Adress" },
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;
