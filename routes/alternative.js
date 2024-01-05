const alternativeController= require("../controller/alternative");
const settingsController= require("../controller/settings")
const express = require("express");
const Router = express.Router();
Router.post("/alternative",alternativeController.alternativedata);
Router.post("/settings",settingsController.settingsdata);
module.exports = Router;