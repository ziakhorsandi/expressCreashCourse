const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

// const logger = require("./middleware/logger");
// //INIT MIDDLEWARE
// app.use(logger);

//BODY PARESER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

//MEMBERS API ROUTES
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
