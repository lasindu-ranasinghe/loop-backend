const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const updatePasswords = require("./config/password");
const config = require("config");

// necessary routes
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const societyRoutes = require("./routes/societyRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const exploreRoutes = require("./routes/exploreRoutes");

const auth = require("./routes/auth");
const email = require("./routes/email");
const messegeRoutes = require("./routes/ChatFeatureRoutes/messegeRoute");
const paymentRoutes = require("./routes/paymentRoutes");

// APP INITIALIZATION

// instantiating an ExpressJS app
const app = express();
require("./config/prod")(app);
// set allowed origins for CORS
const allowedOrigins = ["http://localhost:3000", "http://localhost:8000"];

// middleware for the app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use("/profiles", userRoutes);
app.use("/events", eventRoutes);
app.use("/society", societyRoutes);
app.use("/faculty", facultyRoutes);
app.use("/explore", exploreRoutes);

app.use("/auth", auth);
app.use("/email", email);
app.use("/chat", messegeRoutes);
app.use("/payment", paymentRoutes);

console.log(`BACKEND SERVER STARTED IN ${config.get("Name")} ENVIRONMENT`);

const port = process.env.PORT;

connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests");
  });
});

module.exports = app;
