const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter first name"]
        },
        lastName: {
            type: String,
            required: true,
            required: [true, "Please enter first name"]
        },
        phoneNumber: {
            type: Number,
            required: true,
            required: [true, "Please enter your phone number"]
        },
       
    },

    {
        timestamps: true
    }
)

const User = mongoose.model('Users', userSchema);

module.exports = User;