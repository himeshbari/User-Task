import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    locationName: {
        type: String,
        required: true
    },
    locationCode: {
        type: String,
        required: true
    },
});

export default mongoose.model('Location', locationSchema);