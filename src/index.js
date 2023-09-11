const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

const PersonRouter = require("./routes/Person.js");

const app = express();

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (err) {
  console.log(err);
  mongoose.connection.close();
}

app.use(bodyParser.json());
app.use(express.json());
app.use(helmet());
app.use("/api", PersonRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
