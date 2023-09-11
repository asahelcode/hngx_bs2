const express = require("express");
const {
  validatePersonBody,
  validatePersonParam,
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

Router.get("/:name", validatePersonParam, getPerson);

Router.patch("/:uname", validatePersonUpdateBody, updatePerson);

Router.delete("/:name", validatePersonParam, deletePerson);

module.exports = Router;
