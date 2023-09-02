import mongoose from "mongoose";

const todaySchema = new mongoose.Schema({
	entry: {
		type: String,
		default: ""
	},
	checked: {
		type: Boolean,
		default: false,
	},
	date_created: {
		type: Date,
		default: Date.now,
	},
});

const Today = mongoose.model("Today", todaySchema);

export { Today };
