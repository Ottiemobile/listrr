const { Schema, model } = require('mongoose');

const UserSchema = new Schema(

    {
        username: {
            type: String,
            Required: true,
            unique: true,
            trim: true
        },

        email: {
            type: String,
            match: [/.+@.+\..+/, 'failed to match an email address. please try again'],
            required: true,
            unique: true
        },

        company: {
            type: String,
            required: true,
            trim: true
        },

        list: [
            {
            type: Schema.Types.ObjectId,
            ref: 'list'
            }
        ]

    },

    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }




);

const User = model('User', userSchema);

userSchema.virtual('listGuests').get(function() {
    return this.friends.length;
});

module.exports = User;