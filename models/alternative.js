const mongoose = require("mongoose");


const alternativeSchema = mongoose.Schema(
    {
        N_Food: {
            type: String,
            required: true,
        },
        N_AlternativeFood: {
            type: String,
            required: true,
        },
        AlternativeFood: {
            type: String,
            required: true,
        },
        Stars: {
            type: String,
            required: true,
        },
        Group: {
            type: String,


        },
        Quanti: {
            type: Number,
           
        },
        createdAt: {
            type: Number,
        },
        updatedAt: {
            type: Number,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true, versionKey: false }
);


const alternative = mongoose.model("Alternative",alternativeSchema);
module.exports = { alternative };
