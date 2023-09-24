// import npm packages
import 'dotenv/config.js'
import './config/db.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'
import CustomError from './utils/CustomError.js'

// import routers

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



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

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

export { app }
