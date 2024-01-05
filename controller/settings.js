const {settings} = require("../models/settings")
exports.settingsdata = async (req, res) => {
    try {
        console.log("req.body",req.body)
      let {
        Basal_metabolism_F,
        Basal_metabolism_M,
        gRecipes,
        gDatabaseName,
        gStartDate,
        gEndDate,
        gTempText,
      } = req.body;
 
      let addsettings = await settings.create({
       
        Basal_metabolism_F,
        Basal_metabolism_M,
        gRecipes,
        gDatabaseName,
        gStartDate,
        gEndDate,
        gTempText,
      });
      if (!addsettings) throw new Error("Something Went Wrong");
 
      res.status(200).send({
        success: true,
        message: "Project Created Successfully",
        data: addsettings,
    });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};