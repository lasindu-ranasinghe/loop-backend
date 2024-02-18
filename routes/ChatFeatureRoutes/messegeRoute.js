const express = require("express");
const {
  allMessages,
  sendMessage,
  deleteAllMessages,
} = require("../../Controllers/ChatFeatureControllers/messegeController");

const router = express.Router();

router.route("/").post(sendMessage);
router.route("/:username").get(allMessages);
router.route("/:username").delete(deleteAllMessages);

module.exports = router;
