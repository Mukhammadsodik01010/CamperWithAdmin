const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const router = require("./Routes/CamperRoutes");
const CampingRouter = require("./Routes/CampingPlaceRoute");
const userRouter = require("./Routes/userRoute");
const ClientAuthRouter = require("./Routes/ClientAuthRouter");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use("/main", router)
app.use("/main-camping", CampingRouter)
app.use("/main-user", userRouter)
app.use("/main-client-user", ClientAuthRouter);

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
