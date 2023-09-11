const { body, param } = require("express-validator");

const validatePersonParam = [
  param("name")
    .isString()
    .trim()
    .matches(/^[a-zA-Z ]+$/)
    .isLength({ min: 1, max: 50 })
    .withMessage("Name must be a string"),
];

const validatePersonBody = [
  body("name")
    .isString()
    .notEmpty()
    .isLength({ min: 1, max: 50 })
    .matches(/^[a-zA-Z ]+$/)
    .trim()
    .escape()
    .withMessage("Name must be a string"),
];

const validatePersonUpdateBody = [
  param("uname")
    .isString()
    .notEmpty()
    .matches(/^[a-zA-Z ]+$/)
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Name must be a string"),
  body("name")
    .isString()
    .notEmpty()
    .matches(/^[a-zA-Z ]+$/)
    .isLength({ min: 1, max: 50 })
    .trim()
    .escape()
    .withMessage("Name must be a string"),
];

module.exports = {
  validatePersonParam,
  validatePersonBody,
  validatePersonUpdateBody,
};
