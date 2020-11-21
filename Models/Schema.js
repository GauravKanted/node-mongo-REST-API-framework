/**
 * This file is used to define all the collections that will be used in MongoDB.
 * Schema options can also be set to modify the types of individual collections.
 * 
 * @file Schema.js
 * @fileoverview Contains the mongoose schema definition for MongoDB Collections.
 * @author Gaurav Kanted <gkanted@gmail.com>
 * {@link https://github.com/GauravKanted/node-mongo-REST-API-framework Node Mongo Github}
 * @requires {@link https://www.npmjs.com/package/mongoose Mongoose NPM} Mongoose 
 * @see {@link https://mongoosejs.com/docs/guide.html Mongoose Documentation} for further information.
 * */

const mongoose = require('mongoose')

const schemaOptions = {
    strict: false,
    versionKey: false,
    timestamps: true
}

const UserSchema = mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    mobile_number: { type: Number, required: true, unique: true, },
    address: { type: String, trim: true },
    is_active: { type: Boolean, default: 1 }
}, schemaOptions)

module.exports = {
    UserSchema: mongoose.model('Users', UserSchema)
}