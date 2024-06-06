import express  from 'express'
import dotenv from 'dotenv'
import morgan  from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
const app = express()
const port = process.env.PORT || 5000;
dotenv.config()

//database config
connectDB();
//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);

//rest api
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my e-commerce</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})