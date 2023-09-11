const { validationResult } = require("express-validator");
const Person = require("../models/PersonSchema");

const createPerson = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ message: error.array()[0].msg });
  }

  const { name } = req.body;

  try {
    const personExist = await Person.find({ name });

    if (personExist.length !== 0) {
      return res.json({
        message: `Person with name ${name} already exist`,
      });
    }

    const newPerson = new Person({ name });
    await newPerson.save();

    res.status(200).json({ message: "Person created successfully", newPerson });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPerson = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ message: error.array()[0].msg });
  }

  const name = req.params.name;

  try {
    const person = await Person.find({ name });

    if (person.length === 0) {
      return res.status(404).json({ message: "Person not found!" });
    }

    res.status(200).json({ person });
  } catch (err) {
    console.error(err);
  }
};

const updatePerson = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ message: error.array()[0].msg });
  }

  const { uname: name } = req.params;
  const body = req.body;

  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name },
      { $set: body },
      {
        new: true,
      }
    );

    if (!updatedPerson) {
      return res.status(404).json({ message: "Person not found!" });
    }

    res.status(200).json({ message: "Successfully Updated", updatedPerson });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletePerson = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ message: error.array()[0].msg });
  }

  const { name } = req.params;

  try {
    const deletedPerson = await Person.findOneAndDelete({ name });

    if (!deletedPerson) {
      return res.status(404).json({ message: "Person not found!" });
    }

    res
      .status(200)
      .json({ message: "Person successfully deleted", deletedPerson });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { createPerson, getPerson, updatePerson, deletePerson };
