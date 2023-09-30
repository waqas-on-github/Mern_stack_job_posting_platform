// import npm packages
import 'dotenv/config.js'
import './config/db.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import CustomError from './utils/CustomError.js'

// import routers
import { router as Jobrouter } from './routes/job.route.js'
import { router as Userrouter } from './routes/user.route.js'
// create the express app
const app = express()


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
// mount imported routes


app.use('/api/v1/job', Jobrouter)
app.use('/api/v1/user' , Userrouter)


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

// error handler

app.use(function (err, req, res, next) {
  if(err instanceof(CustomError)) {
    // do acc to custom error 
    return res.status(err.code || 500).json({
      sucess:  false,
      error : err.message
    })
  }
 if(err) {
  return res.status(err.code || 500).json({
    sucess:  false,
    error : err.message
  })
 }

})

// catch 404 and forward to error handler
app.use("*", (req, res) => {
  res.status(404).json({ msg: " 404 not found" });
});





export { app }
