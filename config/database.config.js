let mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

module.exports = mongoose.connection;
