const http = require("http");
const server = http.createServer();
const mongoose = require("mongoose");

// Importation des models `student`& `address`
const studentModel = require("./models/studentModel");
const addressModel = require("./models/addressModel");

// New address instance...
const address = new addressModel({
  streetName: "Rue de la poupée qui tousse",
  streetNumber: "12",
  postCode: "75018",
  city: "Paris City of luv",
});

// Insertion en base de donnée de la collection `address`
address
  .save()
  .then((newAddress) => {
    // New student
    const student = new studentModel({
      firstName: "Sofiane",
      surname: "ABDEDOU",
      address: newAddress._id,
    });
    student.save().then(console.log).catch(console.log);
  })
  .catch(console.error);

studentModel
  .findOne({ _id: "6164a92d12208e1df342f8ea" })
  .populate("address")
  .then(console.log)
  .catch(console.error);

// // Insertion jointure en base de donnée de la collection `student`

// Connection à MongoDB
mongoose.connect("mongodb://localhost:27017/mongoose_populate", (error) => {
  if (error) {
    console.error(error); // Affiche l'erreur de MongoDB en cas de problème
    process.exit(1); // Quitte l'application
  }
  console.log("MongoDB connected Successfully");
});

server.listen(3000, () => {
  console.log(`Nodejs server started on port ${3000}`);
});
