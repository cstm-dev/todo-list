import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
	entry: {
		type: String,
		default: ""
	},
	checked: {
		type: Boolean,
		default: false,
	},
});

const Work = mongoose.model("Work", workSchema);

export { Work };
