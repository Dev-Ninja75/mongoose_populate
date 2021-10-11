const http = require("http");
const server = http.createServer();
const mongoose = require("mongoose");

// Importation des models `student`& `adresse`
const studentModel = require("./models/studentModel");
const addressModel = require("./models/addressModel");

// Insertion en base de donnée de la collection `student`
studentModel.insertMany(students).then(console.log).catch(console.error);
// Insertion en base de donnée de la collection `adress`
adressModel.insertMany(address).then(console.log).catch(console.error);

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