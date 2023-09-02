import mongoose from "mongoose";

const todaySchema = new mongoose.Schema({
	entry: String,
	checked: {
		type: Boolean,
		default: false,
	},
	date_created: {
		type: Date,
		default: Date.now,
	},
});

const Today = mongoose.model("today", todaySchema);

export { Today };
