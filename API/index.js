const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
const routes=require("./Routes/routes")
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MONGODB"))
  .catch((err) => console.log(err)); 
app.use("/api",routes);
app.listen(5000,()=>{
    console.log("Server is up and running");
})
