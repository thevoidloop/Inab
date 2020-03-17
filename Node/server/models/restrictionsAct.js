const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let monthValid = {
    values: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    message: '{VALUE} no es un mes'
}

let Schema = mongoose.Schema;
let monthSchema = new Schema({
    activity: {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
        unique: false,
        required: [true, 'The activity is neccesary']
    },
    moth: {
        type: String,
        unique: true,
        enum: monthValid,
        lowercase: true,
        required: [true, 'The month is neccesary']
    },
    valid: {
        type: Boolean,
        default: true
    }
});


//userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });


module.exports = mongoose.model('RestrictionsAct', monthSchema);