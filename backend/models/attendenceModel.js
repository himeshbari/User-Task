import mongoose from "mongoose";
const Schema = mongoose.Schema;

const attendenceSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },

    locationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: { type: Date, required: true },
});

export default mongoose.model("Attendence", attendenceSchema);
