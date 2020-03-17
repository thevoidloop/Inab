const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let moonValid = {
    values: ['ll', 'ln', 'cm', 'cc'],
    message: '{VALUE} no es aceptado'
}

let Schema = mongoose.Schema;
let moonSchema = new Schema({
    activity: {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
        unique: false,
        required: [true, 'The activity is neccesary']
    },
    moon: {
        type: String,
        unique: false,
        enum: moonValid,
        lowercase: true,
        required: [true, 'The moon is neccesary']
    },
    valid: {
        type: Boolean,
        default: true
    }
});


//userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });


module.exports = mongoose.model('RestrictionsMoon', moonSchema);