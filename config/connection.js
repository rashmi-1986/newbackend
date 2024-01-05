const mongoose = require('mongoose');
require("dotenv").config({ path: ".env" });
const databasename=process.env.DATABASENAME
console.log(databasename)
mongoose
  .connect(databasename)
  .then(() => {
    console.log("database is now changed");
  })
  .catch((error) => {
    console.log("error", error);
  });