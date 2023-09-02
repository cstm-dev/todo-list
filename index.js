import express from "express";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { Today } from "./models/todayModel.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const db = "todoAppDb";
const _URI = `mongodb://127.0.0.1:27017/${db}`;

app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render(`${__dirname}/views/index.ejs`);
});

app.post("/", (req, res) => {
	res.status(403).redirect("/");
});

app.get("/today", async (req, res) => {
	try {
		const allEntries = await Today.find({}, { entry: 1, checked: 1 }).exec();

		res.status(200).render(`${__dirname}/views/today.ejs`, { todayList: allEntries });
	} catch (err) {
		console.error("Couldn't get all entries", err.message);
		res.status(500).json({ message: err.message });
	}
});

app.post("/today", async (req, res) => {
	try {
		const newEntry = await Today.create({}).exec();

		res.status(201).redirect("/today");
	} catch (err) {
		console.error("Couldn't create a new entry", err.message);
		res.status(500).json({ message: err.message });
	}
});

app.post("/put/todayEntry/:id", async (req, res) => {
	try {
		const updateEntry = await Today.updateOne({ _id: req.params.id }, { entry: req.body.textTodoEntry, checked: req.body.checkedTodoEntry }).exec();
		console.log(req.body);
		res.status(200).redirect("/today");
	} catch (err) {
		console.error("Couldn't create a new entry", err.message);
		res.status(500).json({ message: err.message });
	}
});

app.get("/work", (req, res) => {
	res.render(`${__dirname}/views/work.ejs`, { workList: workList });
});

app.post("/work", (req, res) => {
	if (req.body.textTodoEntry) {
		workList[workList.indexOf("")] = req.body.textTodoEntry;
	}

	if (req.body["newEntry.x"]) {
		workList.push("");
	}

	res.render(`${__dirname}/views/work.ejs`, { workList: workList });
});

try {
	await mongoose.connect(_URI);
	console.log("Connection established.");

	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
} catch (err) {
	console.error("Error encountered:", err);
}
