const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const Joi = require("joi");
const { connectToMongoDb } = require("./configs/db.js");

const app = express();
app.use(bodyParser.json());
app.use(helmet());

(async () => {
  try {
    await connectToMongoDb();

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
})();
