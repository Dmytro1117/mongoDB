const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const dotenv = require("dotenv");

dotenv.config();
// const DB_HOST =
//   "mongodb+srv://Max:11Dmytro11@cluster0.bgjfnff.mongodb.net/db-contacts?retryWrites=true&w=majority";
const { DB_HOST } = process.env;
mongoose
  .connect(DB_HOST)
  .then(() => console.log("meowwwwwwwwwwwwwwwwwwww"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
