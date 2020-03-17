const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;
let activitySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'The name is neccesary']
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        unique: false,
        required: [true, 'The category is neccesary']
    },
    valid: {
        type: Boolean,
        default: true
    }
});

//userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });


module.exports = mongoose.model('Activity', activitySchema);