/**
 * This is the starting point for the application.
 * 
 * @file AppConfig.js
 * @fileoverview Contains basic configuration details of the app.
 * @author Gaurav Kanted <gkanted@gmail.com>
 * {@link https://github.com/GauravKanted/node-mongo-REST-API-framework Node Mongo Github}
 * @requires dotenv 
 * */
require('dotenv').config({ path: './Config/.env' })

module.exports = {
    Port: process.env.PORT,
}