const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deptSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    pic: {
      type: String, 
      required: false,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
      },
    ],
    recruiting: {
      type: Boolean,
      default: false,
    },
  },
  { 
    timestamps: true,
    collection: 'Dept' // Correct placement inside the options object
  }
);

module.exports = mongoose.model("Dept", deptSchema);
