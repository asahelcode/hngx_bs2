const express = require("express");
const {
  validatePersonBody,
  validatePersonUpdateBody,
} = require("../middleware/validation");
const {
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/Person");

const Router = express.Router();

Router.post("/", validatePersonBody, createPerson);

Router.get("/:id", getPerson);

Router.patch("/:id", validatePersonBody, updatePerson);

Router.delete("/:id", deletePerson);

module.exports = Router;
