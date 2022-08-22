const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    fullname: String,
    email: String,
    phone: String,
    skype: String,
    username: { type: String, unique: true},
    password: String,
    createdAt: String,
    followers:[{type: Schema.Types.ObjectId, ref:'User'}]
},{versionKey: false});


userSchema.index({'$**': 'text'});

module.exports = mongoose.model('User', userSchema);
