const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  age: {
    type: number,
  },
  nationality: {
    type: string,
  },
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
