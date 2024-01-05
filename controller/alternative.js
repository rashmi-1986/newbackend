const {alternative} = require("../models/alternative")
exports.alternativedata = async (req, res) => {
    try {
        console.log("req.body",req.body)
      let {
        N_Food,
        N_AlternativeFood,
        AlternativeFood,
        Stars,
        Group,
        Quanti,
      } = req.body;
 
      let addalternative = await alternative.create({
       
        N_Food,
        N_AlternativeFood,
        AlternativeFood,
        Stars,
        Group,
        Quanti,
      });
      if (!addalternative) throw new Error("Something Went Wrong");
 
      res.status(200).send({
        success: true,
        message: "Project Created Successfully",
        data: addalternative,
    });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};