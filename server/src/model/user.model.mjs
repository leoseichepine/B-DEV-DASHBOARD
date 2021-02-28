import mongoose from 'mongoose'

/**
 * User schema for mongoDB
 */
const usrSchema = new mongoose.Schema({
    firstName: {type: String, unique: true, required: true},
    lastName: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
    picture: {type: String, unique: false, required: false},
    services: {type: Array, unique: false, required: false},
    creationDate: {type: Date, default: Date.now()}
});

const User = mongoose.model('User', usrSchema, 'users');
export default User;