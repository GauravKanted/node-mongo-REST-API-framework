/**
 * This is the starting point for the application.
 * 
 * @file app.js
 * @fileoverview Contains basic frameworks and structure to start a Nodejs Server.
 * @author Gaurav Kanted <gkanted@gmail.com>
 * {@link https://github.com/GauravKanted/node-mongo-REST-API-framework Node Mongo Github}
 * @requires express 
 * @requires body-parser
 * @requires cors
 * @requires Config
 * @see {@link https://expressjs.com/en/starter/installing.html Express JS Documentation} for further information.
 * */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./Config/AppConfig')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(config.Port, () => {
    console.log(`Nodejs Server Running on port ${config.Port}`)
})