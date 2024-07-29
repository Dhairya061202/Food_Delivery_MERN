import app from "./app.js";
import { connectDB } from "./config/database.js";
import Razorpay from 'razorpay'


//mongodb connection
connectDB();

//razorpay instance
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.get("/", (req,res,next) => {
    res.send("<h1>Wroking</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`server is wroking on port ${process.env.PORT}, in ${process.env.NODE_ENV} mode`);
})