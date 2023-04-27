const { Schema, model } = require('mongoose')

const formResSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const FormRes = model('FormRes', formResSchema)

module.exports = FormRes