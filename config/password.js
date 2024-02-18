const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { ProfileModel } = require("../Models/usersModel");

// Function to update passwords
const updatePasswords = async () => {
  try {
    const users = await ProfileModel.find({});

    for (const user of users) {
      const plainPassword = user.password;
      const hashedPassword = await bcrypt.hash(plainPassword, 10);

      // Update the user's password with the hashed one
      await ProfileModel.updateOne(
        { _id: user._id },
        { password: hashedPassword }
      );

      console.log(`Password updated for user: ${user.username}`);
    }

    console.log("All passwords updated successfully");
  } catch (error) {
    console.error("Error updating passwords:", error);
  }
};

// Call the function to update passwords
module.exports = updatePasswords;
