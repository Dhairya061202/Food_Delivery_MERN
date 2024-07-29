import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import { connectPassport } from './utils/Provider.js'
import session from 'express-session'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import { errorMiddleware } from './middleware/errorMiddleware.js'
import  bodyParser from 'body-parser'
import cors from 'cors'



const app = express()

export default app;

dotenv.config({
    path:"./config/config.env",
})

//using middleware
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,

    cookie:{
        secure:process.env.NODE_ENV === 'development' ? false : true,
        httpOnly:process.env.NODE_ENV === 'development' ? false : true,
        sameSite:process.env.NODE_ENV === 'development' ? false : "none",
    }
}))


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URL,
    methods:['GET', 'POST','DELETE','PUT']
}))
app.use(urlencoded({extended:true}))
app.use(passport.authenticate("session"))
app.use(passport.initialize())
app.use(passport.session())
app.enable("trust proxy");


connectPassport(); 


//importing user routes
import userRoute from './routes/user.js'
import orderRoute from './routes/orders.js'
app.use('/api/v1',userRoute);
app.use('/api/v1',orderRoute);




//using error middleware
app.use(errorMiddleware)