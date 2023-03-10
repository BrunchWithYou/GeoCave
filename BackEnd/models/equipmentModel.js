const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    cloudinaryId: {
      type: String,
      require: false,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    stock: {
      type: mongoose.Schema.Types.Mixed,
      default: "Available",
    },
    vendor: {
      type: String,
    },
    job: [
      {
        type: String,
        default: "All",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("equipmentModel", equipmentSchema, "equipmentCollection");
