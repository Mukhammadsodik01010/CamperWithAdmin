const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const router = require("./Routes/CamperRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use("/main", router)

mongoose
  .connect("mongodb://localhost:27017/camper", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log("MongiDB is connected"))
  .catch(() => console.error("Error connecting MongoDB"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is runing", PORT);
});
