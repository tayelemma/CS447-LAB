const mongoose = require('mongoose');
const moment = require('moment-timezone');
    // const dateIowa = moment.tz(Date.now(), "America/Chicago").toLocalString()
    const dateIowa = Date().toString()
    
    console.log(dateIowa);

const {Schema} = mongoose;

const tweetSchema = new Schema({
    tweet: String,
    user:{type: Schema.Types.ObjectId, ref:'User'},
    createdAt: {type: Date, default: dateIowa}
    
},{versionKey: false});


module.exports = mongoose.model('Twite', tweetSchema);