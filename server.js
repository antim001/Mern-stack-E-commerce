import express  from 'express'
import dotenv from 'dotenv'
const app = express()
const port = process.env.PORT || 5000;
dotenv.config()

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my e-commerce</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})