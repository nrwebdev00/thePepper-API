const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");

//dev only dev
const morgan = require("morgan");
const colors = require("colors");

//Config files
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });

//Routes Import
const user = require("./controller/user");

//DB Connection
connectDB();

const app = express();
app.use(express.json());

//Passport Middleware
app.use(passport.initialize());
require("./auth/passport")(passport);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount Routes
app.use("/api/user", user);

//Run Server
const PORT = process.env.PORT || 5500;
const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .brightYellow.bold
  )
);
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message.red}`);
  server.close(() => process.exit(1));
});
