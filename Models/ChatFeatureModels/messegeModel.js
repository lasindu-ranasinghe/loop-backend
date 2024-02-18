const mongoose = require("mongoose");

const messegeSchema = new mongoose.Schema(
  {
    isbot: Boolean,
    content: { type: String },
    user: String,
  },
  {
    timestamp: true,
  }
);
const MessegeModel = mongoose.model("Messege", messegeSchema);

module.exports = { MessegeModel };
