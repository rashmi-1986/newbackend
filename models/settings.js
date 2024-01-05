const mongoose = require("mongoose");
const settingsSchema = mongoose.Schema(
    {
        Basal_metabolism_F: {
            type: String,
            required: true,
        },
        Basal_metabolism_M: {
            type: String,
            required: true,
        },
        gRecipes: {
            type: String,
            required: true,
        },
        gDatabaseName: {
            type: String,
            required: true,
        },
        gStartDate: {
            type: Date,

        },
        gEndDate: {
            type: Date,
           
        },
        gTempText: {
            type: String,
           
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


const settings = mongoose.model("Settings",settingsSchema);
module.exports = { settings };