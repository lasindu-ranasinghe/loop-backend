const asyncHandler = require("express-async-handler");
const { MessegeModel } = require("../../Models/ChatFeatureModels/messegeModel");
const { ProfileModel } = require("../../Models/usersModel");
const axios = require("axios");

//@description     Get all Messages
//@route           GET /api/Message/:chatId
//@access          Protected
const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await MessegeModel.find({
      user: req.params.username,
    });
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//@description     Delete all Messages of a user
//@route           DELETE /api/Message/:username
//@access          Protected
const deleteAllMessages = asyncHandler(async (req, res) => {
  try {
    const deletedMessages = await MessegeModel.deleteMany({
      user: req.params.username,
    });

    if (deletedMessages.deletedCount > 0) {
      res.status(200).json({
        message: `Successfully deleted all messages for user ${req.params.username}`,
      });
    } else {
      res
        .status(404)
        .json({ message: `No messages found for user ${req.params.username}` });
    }
  } catch (error) {
    console.error("Error deleting messages:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//@description     Create New Message
//@route           POST /api/Message/
//@access          Protected
const sendMessage = asyncHandler(async (req, res) => {
  const username = req.body.username;
  const usermessege = req.body.messege;

  console.log(req.body);

  try {
    const message = new MessegeModel({
      isbot: false,
      content: usermessege,
      user: username,
    });
    await message.save();
    console.log("user messege saved");

    const inputJson = {
      content: usermessege,
      username: username,
    };
    const sanitizedJson = removeInvisibleChars(inputJson);

    const response = await axios.post(
      "https://loop-chatbot-caramel-labs.koyeb.app/chatbot/",
      sanitizedJson,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseText = response.data.response;
    const responseObject = { responseText };

    const botmessage = new MessegeModel({
      isbot: true,
      content: responseObject.responseText,
      user: username,
    });
    await botmessage.save();

    console.log(responseObject);
    res.status(200).json(responseObject);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

function removeInvisibleChars(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].replace(/[^\x20-\x7E]/g, "");
    } else if (typeof obj[key] === "object") {
      obj[key] = removeInvisibleChars(obj[key]); // Recursively remove invisible characters
    }
  }
  return obj;
}

module.exports = { sendMessage, allMessages, deleteAllMessages };
