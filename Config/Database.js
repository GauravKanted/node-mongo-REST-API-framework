/**
 * This is the starting point for the application.
 * 
 * @file Databse.js
 * @fileoverview Contains the database connection of the app.
 * @author Gaurav Kanted <gkanted@gmail.com>
 * {@link https://github.com/GauravKanted/node-mongo-REST-API-framework Node Mongo Github}
 * @requires mongoose 
 * */
const dbInfo = require('./AppConfig')
const mongoClient = require('mongoose')

//Remove deprecation warnings from mongoose
mongoClient.set('useFindAndModify', false);
mongoClient.set('useUnifiedTopology', true);
mongoClient.set('useCreateIndex', true);
mongoClient.set('useNewUrlParser', true);

const dbconnection = mongoClient.connect(dbInfo.MONGODB_CONNECTION)

dbconnection.then((res) => {
    console.log("MongoDB connection successful!")
}).catch((err) => {
    console.log("MongoDB connection failed!")
    console.log(err)
})

module.exports = {
    db: mongoClient
}